import { Body, Controller, Post } from "@nestjs/common";
import { OperationsService } from "./operations.services";

@Controller('operations')
export class OperationsController{
    constructor(private readonly operationsService:OperationsService){}

      @Post()
      async Login(@Body() data) {
        return this.operationsService.chargePrint(data,data.userid);
      }
}