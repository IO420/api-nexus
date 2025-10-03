import { Module } from '@nestjs/common';
import { AreaUbicacionService } from './area_ubicacion.service';
import { AreaUbicacionController } from './area_ubicacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AreaUbicacion } from './entities/area_ubicacion.entity';

@Module({
  imports:[TypeOrmModule.forFeature([AreaUbicacion])],
  controllers: [AreaUbicacionController],
  providers: [AreaUbicacionService],
})
export class AreaUbicacionModule {}
//IO