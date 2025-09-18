import {
  IsString,
  Length,
  IsDateString,
  IsOptional,
  IsBoolean,
} from 'class-validator';

export class CreatePeriodoDto {
  @IsString()
  @Length(6, 6)
  semestre: string;

  @IsDateString()
  fecha_inicio_servicio: string;

  @IsDateString()
  fecha_fin_servicio: string;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;
}
