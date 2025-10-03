import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProgramaEquipoService } from './programa_equipo.service';
import { CreateProgramaEquipoDto } from './dto/create-programa_equipo.dto';
import { UpdateProgramaEquipoDto } from './dto/update-programa_equipo.dto';

@Controller('programa-equipo')
export class ProgramaEquipoController {
  constructor(private readonly programaEquipoService: ProgramaEquipoService) {}

  @Get()
  findAll() {
    return this.programaEquipoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.programaEquipoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProgramaEquipoDto: UpdateProgramaEquipoDto) {
    return this.programaEquipoService.update(+id, updateProgramaEquipoDto);
  }
}
