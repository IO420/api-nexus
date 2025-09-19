import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { OperationsService } from "./operations.services";
import { chargePrintDto } from "./dto/operations.dto";
import { JwtAuthGuard } from "src/user/jwt.guard";

@Controller('operations')
export class OperationsController{
    constructor(private readonly operationsService:OperationsService){}


      @Post()
      async Login(@Body() data:chargePrintDto) {
        return this.operationsService.chargePrint(data,data.id_cuenta);
      }
}