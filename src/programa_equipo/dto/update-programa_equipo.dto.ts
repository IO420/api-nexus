import { PartialType } from '@nestjs/mapped-types';
import { CreateProgramaEquipoDto } from './create-programa_equipo.dto';

export class UpdateProgramaEquipoDto extends PartialType(CreateProgramaEquipoDto) {}
