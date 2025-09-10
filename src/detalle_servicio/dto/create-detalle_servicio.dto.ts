import { Type } from 'class-transformer';
import { IsDate, IsInt, IsNotEmpty, IsOptional, Min } from 'class-validator';

export class CreateDetalleServicioDto {
  @IsInt()
  @Min(0)
  @IsNotEmpty()
  numero_hojas: number;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  fecha_operacion?: Date;

  @IsInt()
  @IsNotEmpty()
  id_cuenta: number;

  @IsInt()
  @IsNotEmpty()
  id_servicio: number;

  @IsInt()
  @IsNotEmpty()
  id_usuario: number;

  @IsOptional()
  @IsInt()
  id_periodo?: number;
}
