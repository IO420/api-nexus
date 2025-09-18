import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlumnoSancionService } from './alumno_sancion.service';
import { CreateAlumnoSancionDto } from './dto/create-alumno_sancion.dto';
import { UpdateAlumnoSancionDto } from './dto/update-alumno_sancion.dto';

@Controller('alumno-sancion')
export class AlumnoSancionController {
  constructor(private readonly alumnoSancionService: AlumnoSancionService) {}

  @Post()
  create(@Body() createAlumnoSancionDto: CreateAlumnoSancionDto) {
    return this.alumnoSancionService.create(createAlumnoSancionDto);
  }

  @Get()
  findAll() {
    return this.alumnoSancionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alumnoSancionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlumnoSancionDto: UpdateAlumnoSancionDto) {
    return this.alumnoSancionService.update(+id, updateAlumnoSancionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alumnoSancionService.remove(+id);
  }
}
