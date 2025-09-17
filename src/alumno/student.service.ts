import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';
import { EntityManager, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AlumnoService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    //Hubo pedos con la base , revisar
    const student = this.studentRepository.create(createStudentDto);
    return await this.studentRepository.save(student);
  }

  findAll(): Promise<Student[]> {
    return this.studentRepository.find({ skip: 5000, take: 50 });
  }

  async findOne(id_cuenta: number): Promise<Student> {
    const student = await this.studentRepository.findOne({
      where: { id_cuenta },
    });
    if (!student) {
      throw new NotFoundException(`Student with ID ${id_cuenta} not found`);
    }
    return student;
  }

  async GetCredit(id_cuenta: number): Promise<Student['credito']> {
    const student = await this.findOne(id_cuenta);
    return student.credito;
  }

  async UpdateCredit(
    id_cuenta: number,
    credit: number,
    manager: EntityManager,
  ) {
    const repo = manager.getRepository(Student);
    return await repo
      .createQueryBuilder()
      .update()
      .set({ credito: () => `credito - ${credit}` })
      .where({ id_cuenta })
      .execute();
  }
}
