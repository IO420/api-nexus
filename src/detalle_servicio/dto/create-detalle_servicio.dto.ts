import { Type } from 'class-transformer';
import { IsDate, IsIn, IsInt, IsNotEmpty, IsOptional, Min } from 'class-validator';

export class CreateDetalleServicioDto {

  @IsInt()
  @IsNotEmpty()
  @Min(1)
  monto:number

  @IsInt()
  @Min(1)
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
}
