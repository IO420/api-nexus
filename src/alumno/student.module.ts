import { Module } from '@nestjs/common';
import { AlumnoService } from './student.service';
import { AlumnoController } from './student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alumno } from './entities/student.entity';
import { Carrera } from 'src/carrera/entities/carrera.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Alumno, Carrera])],
  controllers: [AlumnoController],
  providers: [AlumnoService],
  exports: [AlumnoService],
})
export class AlumnoModule {}
//IO
