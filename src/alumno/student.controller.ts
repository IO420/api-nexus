import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AlumnoService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { Alumno } from './entities/student.entity';

@Controller('student')
export class AlumnoController {
  constructor(private readonly alumnoService: AlumnoService) {}

  @Post()
  async create(@Body() createStudentDto: CreateStudentDto): Promise<Alumno> {
    return this.alumnoService.create(createStudentDto);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.alumnoService.findOne(+id);
  }
}
//IO
