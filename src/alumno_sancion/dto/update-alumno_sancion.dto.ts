import { PartialType } from '@nestjs/mapped-types';
import { CreateAlumnoSancionDto } from './create-alumno_sancion.dto';

export class UpdateAlumnoSancionDto extends PartialType(CreateAlumnoSancionDto) {}
