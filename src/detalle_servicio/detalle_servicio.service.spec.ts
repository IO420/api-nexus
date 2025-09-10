import { Test, TestingModule } from '@nestjs/testing';
import { DetalleServicioService } from './detalle_servicio.service';

describe('DetalleServicioService', () => {
  let service: DetalleServicioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetalleServicioService],
    }).compile();

    service = module.get<DetalleServicioService>(DetalleServicioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
