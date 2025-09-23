import { IsBoolean, IsNotEmpty } from 'class-validator';

export class UpdateMesaDto {
  @IsNotEmpty()
  @IsBoolean()
  activo: boolean;
}
