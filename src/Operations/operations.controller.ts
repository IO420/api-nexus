import { Controller } from "@nestjs/common";
import { OperationsService } from "./operations.services";

@Controller('operations')
export class OperationsController{
    constructor(private readonly operationsService:OperationsService){}

    
}