import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ReciboService } from './recibo.service';
import { FindReciboByRangeDto } from './dto/create-recibo.dto';

@Controller('recibo')
export class ReciboController {
  constructor(private readonly reciboService: ReciboService) {}

  @Post('rango')
  async findByDateRange(@Body() data: FindReciboByRangeDto) {
    return this.reciboService.findByDateRange(data.desde, data.hasta);
  }
}
//IO
