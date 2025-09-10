import { Test, TestingModule } from '@nestjs/testing';
import { DetalleServicioController } from './detalle_servicio.controller';
import { DetalleServicioService } from './detalle_servicio.service';

describe('DetalleServicioController', () => {
  let controller: DetalleServicioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetalleServicioController],
      providers: [DetalleServicioService],
    }).compile();

    controller = module.get<DetalleServicioController>(DetalleServicioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
