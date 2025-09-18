import { Module } from '@nestjs/common';
import { SancionService } from './sancion.service';
import { SancionController } from './sancion.controller';

@Module({
  controllers: [SancionController],
  providers: [SancionService],
})
export class SancionModule {}
