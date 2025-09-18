import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AlumnoSancionService } from './alumno_sancion.service';
import { CreateAlumnoSancionDto } from './dto/create-alumno_sancion.dto';
import { AlumnoSancion } from './entities/alumno_sancion.entity';

@Controller('alumno-sancion')
export class AlumnoSancionController {
  constructor(private readonly alumnoSancionService: AlumnoSancionService) {}

  @Post()
  async create(
    @Body() createAlumnoSancionDto: CreateAlumnoSancionDto,
  ): Promise<AlumnoSancion> {
    return this.alumnoSancionService.create(createAlumnoSancionDto);
  }

  @Get()
  findAll() {
    return this.alumnoSancionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.alumnoSancionService.findOne(+id);
  }
}
