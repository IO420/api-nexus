import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ReciboService } from './recibo.service';

@Controller('recibo')
export class ReciboController {
  constructor(private readonly reciboService: ReciboService) {}

}
//IO
