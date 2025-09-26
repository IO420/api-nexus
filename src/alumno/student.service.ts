import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { Alumno } from './entities/student.entity';
import { EntityManager, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Carrera } from 'src/carrera/entities/carrera.entity';

@Injectable()
export class AlumnoService {
  constructor(
    @InjectRepository(Alumno)
    private readonly studentRepository: Repository<Alumno>,
    @InjectRepository(Carrera)
    private readonly carreraRepository: Repository<Carrera>,
  ) {}

  async create(data: CreateStudentDto): Promise<Alumno> {
    const { id_carrera, ...rest } = data;
    const carrera = await this.carreraRepository.findOne({
      where: { id_carrera: data.id_carrera },
    });
    if (!carrera) {
      throw new NotFoundException(`Carrera not found`);
    }
    const createStudent = { ...rest, carrera, fecha_registro: new Date() };

    const student = this.studentRepository.create(createStudent);
    return await this.studentRepository.save(student);
  }

  async findOne(id_cuenta: number): Promise<Alumno> {
    const student = await this.studentRepository.findOne({
      where: { id_cuenta },
      select: { id_cuenta: true, nombre: true, credito: true },
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
