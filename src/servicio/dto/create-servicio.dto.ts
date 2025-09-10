import { IsString, MaxLength } from 'class-validator';

export class CreateServicioDto {
  @IsString()
  @MaxLength(45)
  servicio: string;
}
