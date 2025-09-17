import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from 'src/alumno/entities/student.entity';
import { DetalleServicio } from 'src/detalle_servicio/entities/detalle_servicio.entity';
import { OperationsController } from './operations.controller';
import { OperationsService } from './operations.services';

@Module({
  imports: [
    TypeOrmModule.forFeature([Student, DetalleServicio]), // entidades que usarán las transacciones
  ],
  controllers: [OperationsController],
  providers: [OperationsService],
})
export class OperationsModule {}
