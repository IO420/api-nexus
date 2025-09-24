import { IsNotEmpty, IsNumber, IsBoolean } from 'class-validator';

export class CreateAlumnoInscritoDto {
  @IsNotEmpty()
  @IsNumber()
  id_cuenta: number;

  @IsNotEmpty()
  @IsNumber()
  id_periodo: number;

  @IsNotEmpty()
  @IsNumber()
  id_plataforma: number;

  @IsBoolean()
  realizo_pago?: boolean;

  @IsBoolean()
  platica?: boolean;

  @IsNumber()
  tiempo_disponible?: number;

  @IsBoolean()
  ad?: boolean;
}
