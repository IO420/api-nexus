import { Test, TestingModule } from '@nestjs/testing';
import { AlumnoSancionService } from './alumno_sancion.service';

describe('AlumnoSancionService', () => {
  let service: AlumnoSancionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlumnoSancionService],
    }).compile();

    service = module.get<AlumnoSancionService>(AlumnoSancionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
