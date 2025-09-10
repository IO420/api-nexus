import { IsNumber, IsString } from 'class-validator';

export class studentDto {
  @IsNumber()
  id_cuenta: number;
}
