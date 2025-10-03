import { Module } from '@nestjs/common';
import { ProgramaEquipoService } from './programa_equipo.service';
import { ProgramaEquipoController } from './programa_equipo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProgramaEquipo } from './entities/programa_equipo.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ProgramaEquipo])],
  controllers: [ProgramaEquipoController],
  providers: [ProgramaEquipoService],
})
export class ProgramaEquipoModule {}
