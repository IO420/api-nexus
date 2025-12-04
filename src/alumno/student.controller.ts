import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { AlumnoService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { Alumno } from './entities/student.entity';
import { JwtAuthGuard } from 'src/user/jwt.guard';
import { RolesGuard } from 'src/roles.guard';
import { Roles } from 'src/roles.decorator';
import { Role } from 'src/role.enum';

@Controller('student')
export class AlumnoController {
  constructor(private readonly alumnoService: AlumnoService) {}

  @Post()
  async create(@Body() createStudentDto: CreateStudentDto): Promise<Alumno> {
    return this.alumnoService.create(createStudentDto);
  }

  //@UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.alumnoService.findOne(+id);
  }

  @Post('/create')
  async newStudent(@Body() createStudentDto: CreateStudentDto) {
    return this.alumnoService.create(createStudentDto);
  }
}
//IO
