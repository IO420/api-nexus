export class CreateTicketDto {}

import { IsNumber, IsString } from 'class-validator';

export class CreateStudentDto {
  @IsNumber()
  folio: number;
}
