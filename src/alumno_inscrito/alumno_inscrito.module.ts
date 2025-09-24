import { Module } from '@nestjs/common';
import { AlumnoInscritoService } from './alumno_inscrito.service';
import { AlumnoInscritoController } from './alumno_inscrito.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlumnoInscrito } from './entities/alumno_inscrito.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AlumnoInscrito])],
  controllers: [AlumnoInscritoController],
  providers: [AlumnoInscritoService],
})
export class AlumnoInscritoModule {}
