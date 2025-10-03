import { Controller, Get, Param } from '@nestjs/common';
import { AreaUbicacionService } from './area_ubicacion.service';

@Controller('area-ubicacion')
export class AreaUbicacionController {
  constructor(private readonly areaUbicacionService: AreaUbicacionService) {}

  @Get()
  findAll() {
    return this.areaUbicacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.areaUbicacionService.findOne(+id);
  }
}
//IO
