import { Test, TestingModule } from '@nestjs/testing';
import { AlumnoSancionController } from './alumno_sancion.controller';
import { AlumnoSancionService } from './alumno_sancion.service';

describe('AlumnoSancionController', () => {
  let controller: AlumnoSancionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlumnoSancionController],
      providers: [AlumnoSancionService],
    }).compile();

    controller = module.get<AlumnoSancionController>(AlumnoSancionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
