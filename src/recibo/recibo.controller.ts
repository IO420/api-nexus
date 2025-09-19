import {
  Controller,
  Post,
  Body,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ReciboService } from './recibo.service';
import { CreateReciboDto } from './dto/create-recibo.dto';
import { JwtAuthGuard } from 'src/user/jwt.guard';

@Controller('recibo')
export class ReciboController {
  constructor(private readonly reciboService: ReciboService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async createReceipt(@Body() data: CreateReciboDto, @Req() req: any) {
    const userId = req.user.id;
    return this.reciboService.create(data, +userId);
  }
}
//IO
