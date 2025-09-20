import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { OperationsService } from './operations.services';
import { chargePrintDto } from './dto/operations.dto';
import { JwtAuthGuard } from 'src/user/jwt.guard';

@Controller('operations')
export class OperationsController {
  constructor(private readonly operationsService: OperationsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('impressions')
  async chargePrint(@Body() data: chargePrintDto, @Req() req: any) {
    const id_usuario = req.user.id;
    return this.operationsService.chargePrint(data, id_usuario);
  }

  @UseGuards(JwtAuthGuard)
  @Post('receipt')
  async addCredit(@Body() data, @Req() req: any) {
    const id_usuario = req.user.id;
    return this.operationsService.addCredit(data, id_usuario);
  }
}
