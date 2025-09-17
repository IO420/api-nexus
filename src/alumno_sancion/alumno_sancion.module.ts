import { Module } from '@nestjs/common';
import { AlumnoSancionService } from './alumno_sancion.service';
import { AlumnoSancionController } from './alumno_sancion.controller';

@Module({
  controllers: [AlumnoSancionController],
  providers: [AlumnoSancionService],
})
export class AlumnoSancionModule {}
