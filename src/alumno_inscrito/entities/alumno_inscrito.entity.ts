import { Alumno } from 'src/alumno/entities/student.entity';
import { Equipo } from 'src/equipo/entities/equipo.entity';
import { Periodo } from 'src/periodo/entities/periodo.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'plataforma' })
export class Plataforma {
  @PrimaryGeneratedColumn({ name: 'id_plataforma' })
  id_plataforma: number;

  @Column({ name: 'plataforma', type: 'varchar', length: 45 })
  nombre: string;

  @OneToMany(
    () => AlumnoInscrito,
    (alumnoInscrito) => alumnoInscrito.plataforma,
  )
  alumnos_inscritos: AlumnoInscrito[];

  @OneToMany(() => Equipo, (equipo) => equipo.plataforma)
  equipos: Equipo[];
}

@Entity({ name: 'alumno_inscrito' })
export class AlumnoInscrito {
  @PrimaryGeneratedColumn({ name: 'id_alumno_inscrito' })
  id_alumno_inscrito: number;

  @Column({
    name: 'fecha_inscripcion',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  fecha_inscripcion: Date;

  @Column({ name: 'tiempo_disponible', type: 'int', default: 3600 })
  tiempo_disponible: number;

  @Column({ name: 'realizo_pago', type: 'tinyint', width: 1, default: 0 })
  realizo_pago: boolean;

  @Column({ name: 'platica', type: 'bit', width: 1, default: () => "b'0'" })
  platica: boolean;

  @ManyToOne(() => Alumno)
  @JoinColumn({ name: 'id_cuenta' })
  alumno: Alumno;

  @ManyToOne(() => Periodo)
  @JoinColumn({ name: 'id_periodo' })
  periodo: Periodo;

  @ManyToOne(() => Plataforma)
  @JoinColumn({ name: 'id_plataforma' })
  plataforma: Plataforma;

  @Column({
    name: 'ad',
    type: 'bit',
    width: 1,
    nullable: true,
    default: () => "b'0'",
  })
  ad?: boolean;
}
