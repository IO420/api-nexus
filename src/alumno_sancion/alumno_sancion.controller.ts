import { Controller, Get, Param } from '@nestjs/common';
import { AlumnoSancionService } from './alumno_sancion.service';

@Controller('alumno-sancion')
export class AlumnoSancionController {
  constructor(private readonly alumnoSancionService: AlumnoSancionService) {}

  @Get()
  findAll() {
    return this.alumnoSancionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.alumnoSancionService.findOne(+id);
  }
}
