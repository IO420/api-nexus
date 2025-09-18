import { Module } from '@nestjs/common';
import { AlumnoService } from './student.service';
import { StudentController } from './student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alumno } from './entities/student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Alumno])],
  controllers: [StudentController],
  providers: [AlumnoService],
})
export class StudentModule {}
