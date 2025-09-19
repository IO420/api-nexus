import { Module } from '@nestjs/common';
import { ReciboService } from './recibo.service';
import { ReciboController } from './recibo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recibo } from './entities/recibo.entity';
import { AlumnoModule } from 'src/alumno/student.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Recibo]), AlumnoModule, UserModule],
  controllers: [ReciboController],
  providers: [ReciboService],
})
export class ReciboModule {}
//IO
