import { Module } from '@nestjs/common';
import { AlumnoSancionService } from './alumno_sancion.service';
import { AlumnoSancionController } from './alumno_sancion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlumnoSancion } from './entities/alumno_sancion.entity';
import { Alumno } from 'src/alumno/entities/student.entity';
import { Sancion } from 'src/sancion/entities/sancion.entity';

@Module({
  imports:[TypeOrmModule.forFeature([AlumnoSancion,Alumno,Sancion])],
  controllers: [AlumnoSancionController],
  providers: [AlumnoSancionService],
})
export class AlumnoSancionModule {}
