import { Type } from 'class-transformer';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateReciboDto {
  @IsNumber()
  id_cuenta: number;

  @IsNumber()
  monto: number;

  @IsString()
  folio_recibo: string;

  @IsDate()
  @Type(() => Date)
  fecha_recibo: Date;
}
