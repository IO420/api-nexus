import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class Login {
  @IsString()
  usuario: string;

  @IsString()
  password: string;
}

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  apellido_paterno: string;

  @IsString()
  @IsOptional()
  apellido_materno?: string;

  @IsString()
  @IsNotEmpty()
  usuario: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(45)
  password: string;

  @IsInt()
  @IsOptional()
  activo?: number;

  @IsString()
  @IsOptional()
  @MaxLength(50)
  descripcion?: string;

  @IsString()
  @IsOptional()
  fecha_registro?: string;

  @IsInt()
  @IsNotEmpty()
  id_perfil: number;
}
