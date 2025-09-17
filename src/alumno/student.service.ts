import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StudentService {
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

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
