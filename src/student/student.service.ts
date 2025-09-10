import { Inject, Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { studentDto } from './dto/student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studenRepository: Repository<Student>,
  ) {}
  findOne(data: studentDto) {
    const { id_cuenta } = data;
    return this.studenRepository.findOne({ where: { id_cuenta } });
  }
}
