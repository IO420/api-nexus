import { Type } from 'class-transformer';
import { IsDate, IsDateString, IsNumber, IsString } from 'class-validator';

export class CreateReciboDto {

  @IsNumber()
  monto: number;

  @IsString()
  folio_recibo: string;

  @IsDate()
  @Type(() => Date)
  fecha_recibo: Date;
}

export class FindReciboByRangeDto {
  @IsDateString()
  desde: string;

  @IsDateString()
  hasta: string;
}