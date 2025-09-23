import { Controller, Body, Patch, Param, Delete, Get } from '@nestjs/common';
import { MesaService } from './mesa.service';
import { UpdateMesaDto } from './dto/update-mesa.dto';

@Controller('mesa')
export class MesaController {
  constructor(private readonly mesaService: MesaService) {}

  @Get('all')
  async findAll() {
    return this.mesaService.findAll();
  }

  @Patch(':id')
  async updateActivo(
    @Param('id') id: number,
    @Body() updateMesaDto: UpdateMesaDto,
  ) {
    return this.mesaService.updateActivo(id, updateMesaDto);
  }
}
