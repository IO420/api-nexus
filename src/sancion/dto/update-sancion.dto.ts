import { PartialType } from '@nestjs/mapped-types';
import { CreateSancionDto } from './create-sancion.dto';

export class UpdateSancionDto extends PartialType(CreateSancionDto) {}
