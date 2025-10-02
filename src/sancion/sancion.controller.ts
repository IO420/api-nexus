import { Controller, Get, Param } from '@nestjs/common';
import { SancionService } from './sancion.service';
@Controller('sancion')
export class SancionController {
  constructor(private readonly sancionService: SancionService) {}

  @Get()
  find() {
    return this.sancionService.find();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.sancionService.findOne(+id);
  }
}
