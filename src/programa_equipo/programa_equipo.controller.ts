import { Controller, Get, Body, Patch, Param } from '@nestjs/common';
import { ProgramaEquipoService } from './programa_equipo.service';
import { UpdateProgramaEquipoDto } from './dto/update-programa_equipo.dto';

@Controller('programa-equipo')
export class ProgramaEquipoController {
  constructor(private readonly programaEquipoService: ProgramaEquipoService) {}

  @Get('programas/:id')
  findAllProgramByNumber(@Param('id') id: number) {
    return this.programaEquipoService.findAllProgramByNumber(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.programaEquipoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProgramaEquipoDto: UpdateProgramaEquipoDto,
  ) {
    return this.programaEquipoService.update(+id, updateProgramaEquipoDto);
  }
}
