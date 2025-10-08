import { Controller, Get } from '@nestjs/common';
import { CarreraService } from './carrera.service';
import { Carrera } from './entities/carrera.entity';

@Controller('carrera')
export class CarreraController {
  constructor(private readonly carreraService: CarreraService) {}

  @Get()
  findAll(): Promise<Carrera[]> {
    return this.carreraService.findAll();
  }
}
