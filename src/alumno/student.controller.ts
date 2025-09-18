import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AlumnoService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { Student } from './entities/student.entity';

@Controller('student')
export class StudentController {
  constructor(private readonly alumnoService: AlumnoService) {}

  @Post()
  async create(@Body() createStudentDto: CreateStudentDto): Promise<Student> {
    return this.alumnoService.create(createStudentDto);
  }

  @Get()
  async findAll(): Promise<Student[]> {
    return this.alumnoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.alumnoService.findOne(+id);
  }
}
