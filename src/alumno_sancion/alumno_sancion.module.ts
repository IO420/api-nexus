import { Module } from '@nestjs/common';
import { AlumnoSancionService } from './alumno_sancion.service';
import { AlumnoSancionController } from './alumno_sancion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlumnoSancion } from './entities/alumno_sancion.entity';
import { Alumno } from 'src/alumno/entities/student.entity';
import { Sancion } from 'src/sancion/entities/sancion.entity';
import { AlumnoModule } from 'src/alumno/student.module';
import { SancionModule } from 'src/sancion/sancion.module';
import { AlumnoService } from 'src/alumno/student.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([AlumnoSancion, Alumno, Sancion]),
    AlumnoModule,
    SancionModule,
  ],
  controllers: [AlumnoSancionController],
  providers: [AlumnoSancionService],
})
export class AlumnoSancionModule {}
//IO
