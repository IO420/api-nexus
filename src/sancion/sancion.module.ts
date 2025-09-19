import { Module } from '@nestjs/common';
import { SancionService } from './sancion.service';
import { SancionController } from './sancion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sancion } from './entities/sancion.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Sancion])],
  controllers: [SancionController],
  providers: [SancionService],
  exports:[SancionService],
})
export class SancionModule {}
//IO