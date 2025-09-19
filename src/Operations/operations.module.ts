import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alumno } from 'src/alumno/entities/student.entity';
import { DetalleServicio } from 'src/detalle_servicio/entities/detalle_servicio.entity';
import { OperationsController } from './operations.controller';
import { OperationsService } from './operations.services';
import { DetalleServicioModule } from 'src/detalle_servicio/detalle_servicio.module';
import { AlumnoModule } from 'src/alumno/student.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Alumno, DetalleServicio]),
    DetalleServicioModule,
    AlumnoModule,
  ],
  controllers: [OperationsController],
  providers: [OperationsService],
})
export class OperationsModule {}
//IO