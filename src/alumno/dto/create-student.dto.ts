import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateStudentDto {
  @IsNotEmpty()
  @IsNumber()
  id_cuenta: number;

  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsString()
  fecha_nacimiento: string;

  @IsNotEmpty()
  @IsNumber()
  id_carrera: number;

  @IsEmail()
  @IsString()
  correo: string;
}