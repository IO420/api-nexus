import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './alumno/student.module';
import { UserModule } from './user/user.module';
import { Perfil, User } from './user/entities/user.entity';
import { DetalleServicioModule } from './detalle_servicio/detalle_servicio.module';
import { PeriodoModule } from './periodo/periodo.module';
import { ServicioModule } from './servicio/servicio.module';
import { Student } from './alumno/entities/student.entity';
import { DetalleServicio } from './detalle_servicio/entities/detalle_servicio.entity';
import { Periodo } from './periodo/entities/periodo.entity';
import { Servicio } from './servicio/entities/servicio.entity';
import { SancionModule } from './sancion/sancion.module';
import { AlumnoSancionModule } from './alumno_sancion/alumno_sancion.module';
import { AlumnoSancion } from './alumno_sancion/entities/alumno_sancion.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'mariadb',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [
          User,
          Student,
          DetalleServicio,
          Periodo,
          Servicio,
          Perfil,
          AlumnoSancion,
        ],
        synchronize: false, //Never change to true in production!
      }),
    }),
    UserModule,
    StudentModule,
    DetalleServicioModule,
    PeriodoModule,
    ServicioModule,
    StudentModule,
    SancionModule,
    AlumnoSancionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
