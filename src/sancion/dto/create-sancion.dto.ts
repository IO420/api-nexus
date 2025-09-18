import { IsInt, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateSancionDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(45)
  sancion: string;

  @IsNotEmpty()
  @IsInt()
  duracion: number;
}
