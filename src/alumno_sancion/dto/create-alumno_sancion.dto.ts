import { IsDateString, IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateAlumnoSancionDto {
  @IsNotEmpty()
  @IsInt()
  id_sancion: number;

  @IsNotEmpty()
  @IsInt()
  id_cuenta: number;

  @IsOptional()
  @IsDateString()
  fecha_inicio?: string;
}
