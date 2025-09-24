import { PartialType } from '@nestjs/mapped-types';
import { CreateAlumnoInscritoDto } from './create-alumno_inscrito.dto';

export class UpdateAlumnoInscritoDto extends PartialType(CreateAlumnoInscritoDto) {}
