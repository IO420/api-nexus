import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AlumnoSancionService } from './alumno_sancion.service';
import { CreateAlumnoSancionDto } from './dto/create-alumno_sancion.dto';

@Controller('alumno-sancion')
export class AlumnoSancionController {
  constructor(private readonly alumnoSancionService: AlumnoSancionService) {}

  @Post()
  async create(@Body() createAlumnoSancionDto: CreateAlumnoSancionDto) {
    return this.alumnoSancionService.create(createAlumnoSancionDto);
  }

  @Get(':id')
  findbyStudent(@Param('id') id: number) {
    return this.alumnoSancionService.findbyStudent(+id);
  }

  @Delete()
  deleteSancion(){

  }
}
//IO