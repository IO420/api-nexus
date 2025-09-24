import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  usuario: string;

  @IsString()
  password: string;
}

export class changePasswordDto {

  @IsString()
  password: string;

  @IsString()
  newPassword: string;
}