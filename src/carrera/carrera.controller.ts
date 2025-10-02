import { Controller, Get } from '@nestjs/common';
import { CarreraService } from './carrera.service';

@Controller('carrera')
export class CarreraController {
  constructor(private readonly carreraService: CarreraService) {}

  @Get()
  findAll() {
    return this.carreraService.findAll();
  }
}
