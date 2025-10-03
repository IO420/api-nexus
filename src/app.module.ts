import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlumnoModule } from './alumno/student.module';
import { UserModule } from './user/user.module';
import { Perfil, User } from './user/entities/user.entity';
import { DetalleServicioModule } from './detalle_servicio/detalle_servicio.module';
import { PeriodoModule } from './periodo/periodo.module';
import { ServicioModule } from './servicio/servicio.module';
import { Alumno } from './alumno/entities/student.entity';
import { DetalleServicio } from './detalle_servicio/entities/detalle_servicio.entity';
import { Periodo } from './periodo/entities/periodo.entity';
import { Servicio } from './servicio/entities/servicio.entity';
import { SancionModule } from './sancion/sancion.module';
import { AlumnoSancionModule } from './alumno_sancion/alumno_sancion.module';
import { AlumnoSancion } from './alumno_sancion/entities/alumno_sancion.entity';
import { Sancion } from './sancion/entities/sancion.entity';
import { OperationsModule } from './Operations/operations.module';
import { Recibo } from './recibo/entities/recibo.entity';
import { ReciboModule } from './recibo/recibo.module';
import { MesaModule } from './mesa/mesa.module';
import { Mesa } from './mesa/entities/mesa.entity';
import { AlumnoInscritoModule } from './alumno_inscrito/alumno_inscrito.module';
import {
  AlumnoInscrito,
  Plataforma,
} from './alumno_inscrito/entities/alumno_inscrito.entity';
import { EquipoModule } from './equipo/equipo.module';
import { CarreraModule } from './carrera/carrera.module';
import { Carrera } from './carrera/entities/carrera.entity';
import { Equipo } from './equipo/entities/equipo.entity';
import { AreaUbicacionModule } from './area_ubicacion/area_ubicacion.module';
import { ProgramaModule } from './programa/programa.module';
import { AreaUbicacion } from './area_ubicacion/entities/area_ubicacion.entity';
import { Programa } from './programa/entities/programa.entity';
import { ProgramaEquipoModule } from './programa_equipo/programa_equipo.module';

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
          Alumno,
          DetalleServicio,
          Periodo,
          Servicio,
          Perfil,
          AlumnoSancion,
          Sancion,
          Carrera,
          Recibo,
          Mesa,
          AlumnoInscrito,
          Plataforma,
          Equipo,
          AreaUbicacion,
          Programa,
        ],
        synchronize: false, //Never change to true in production!
      }),
    }),
    UserModule,
    AlumnoModule,
    DetalleServicioModule,
    PeriodoModule,
    ServicioModule,
    SancionModule,
    AlumnoSancionModule,
    OperationsModule,
    ReciboModule,
    MesaModule,
    AlumnoInscritoModule,
    EquipoModule,
    CarreraModule,
    AreaUbicacionModule,
    ProgramaModule,
    ProgramaEquipoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
//IO
