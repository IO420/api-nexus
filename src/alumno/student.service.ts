import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { Alumno } from './entities/student.entity';
import { EntityManager, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AlumnoService {
  constructor(
    @InjectRepository(Alumno)
    private readonly studentRepository: Repository<Alumno>,
  ) {}

  async create(createStudentDto: CreateStudentDto): Promise<Alumno> {
    //Hubo pedos con la base , revisar
    const student = this.studentRepository.create(createStudentDto);
    return await this.studentRepository.save(student);
  }

  async findOne(id_cuenta: number): Promise<Alumno> {
    const student = await this.studentRepository.findOne({
      where: { id_cuenta: id_cuenta },
    });

    if (!student) {
      throw new NotFoundException(`Student not found`);
    }

    return student;
  }

  async GetCredit(id_cuenta: number): Promise<Alumno['credito']> {
    const student = await this.findOne(id_cuenta);
    return student.credito;
  }

  async collectCredit(
    id_cuenta: number,
    credit: number,
    manager: EntityManager,
  ) {
    const repo = manager.getRepository(Alumno);
    return await repo
      .createQueryBuilder()
      .update()
      .set({ credito: () => `credito - ${credit}` })
      .where({ id_cuenta })
      .execute();
  }

  async addCredit(id_cuenta: number, credit: number, manager: EntityManager) {
    const repo = manager.getRepository(Alumno);
    return await repo
      .createQueryBuilder()
      .update()
      .set({ credito: () => `credito + ${credit}` })
      .where({ id_cuenta })
      .execute();
  }
}
//IO
