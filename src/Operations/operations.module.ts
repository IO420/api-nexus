import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alumno } from 'src/alumno/entities/student.entity';
import { DetalleServicio } from 'src/detalle_servicio/entities/detalle_servicio.entity';
import { OperationsController } from './operations.controller';
import { OperationsService } from './operations.services';

@Module({
  imports: [
    TypeOrmModule.forFeature([Alumno, DetalleServicio]),
  ],
  controllers: [OperationsController],
  providers: [OperationsService],
})
export class OperationsModule {}
//IO