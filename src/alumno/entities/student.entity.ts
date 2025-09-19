import { AlumnoSancion } from 'src/alumno_sancion/entities/alumno_sancion.entity';
import { DetalleServicio } from 'src/detalle_servicio/entities/detalle_servicio.entity';
import { Recibo } from 'src/recibo/entities/recibo.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'carrera' })
export class Carrera {
  @PrimaryGeneratedColumn({ name: 'id_carrera', type: 'int', unsigned: true })
  id_carrera: number;

  @Column({
    name: 'carrera',
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  carrera: string;

  @OneToMany(() => Alumno, (student) => student.carrera)
  estudiantes: Alumno[];
}

@Entity({ name: 'alumno' })
export class Alumno {
  @PrimaryGeneratedColumn({ name: 'id_cuenta', type: 'int', unsigned: true })
  id_cuenta: number;

  @Column({ name: 'nombre', type: 'varchar', length: 300, nullable: false })
  nombre: string;

  @Column({
    name: 'fecha_nacimiento',
    type: 'varchar',
    length: 8,
    nullable: true,
  })
  fecha_nacimiento: Date | null;

  @Column({ name: 'correo', type: 'varchar', length: 100, nullable: true })
  correo: string | null;

  @Column({
    name: 'credito',
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0.0,
  })
  credito: number;

  @Column({
    name: 'fecha_actualizacion_credito',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  fecha_actualizacion_credito: Date;

  @Column({
    name: 'vigente',
    type: 'enum',
    enum: ['si', 'no'],
    default: 'si',
  })
  vigente: 'si' | 'no';

  @Column({ name: 'id_periodo', type: 'int', nullable: true })
  id_periodo: number | null;

  @Column({
    name: 'fecha_registro',
    type: 'datetime',
    nullable: false,
  })
  fecha_registro: Date;

  @Column({ name: 'generacion', type: 'int', width: 4, nullable: true })
  generacion: number | null;

  @OneToMany(() => DetalleServicio, (detalle) => detalle.id_cuenta)
  detalles_servicio: DetalleServicio[];

  @ManyToOne(() => Carrera, (carrera) => carrera.estudiantes, {
    eager: true,
    nullable: true,
  })
  @JoinColumn({ name: 'id_carrera' })
  carrera: Carrera;

  @OneToMany(() => AlumnoSancion, (alusancion) => alusancion.sancion)
  sanciones: AlumnoSancion[];

  @OneToMany(() => Recibo, (recibo) => recibo.alum)
  recibo: Recibo[];
}
