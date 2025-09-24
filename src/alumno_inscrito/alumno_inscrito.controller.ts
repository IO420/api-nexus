import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlumnoInscritoService } from './alumno_inscrito.service';
import { CreateAlumnoInscritoDto } from './dto/create-alumno_inscrito.dto';
import { UpdateAlumnoInscritoDto } from './dto/update-alumno_inscrito.dto';
import { AlumnoInscrito } from './entities/alumno_inscrito.entity';

@Controller('alumno-inscrito')
export class AlumnoInscritoController {
  constructor(private readonly alumnoInscritoService: AlumnoInscritoService) {}

  @Post()
  async create(@Body() dto: CreateAlumnoInscritoDto): Promise<AlumnoInscrito> {
    return this.alumnoInscritoService.create(dto);
  }

  @Get()
  async findAll(): Promise<AlumnoInscrito[]> {
    return this.alumnoInscritoService.findAll();
  }

  @Get(':id_cuenta')
  async findByAlumno(@Param('id_cuenta') id_cuenta: number): Promise<AlumnoInscrito[]> {
    return this.alumnoInscritoService.findByAlumno(id_cuenta);
  }
}
