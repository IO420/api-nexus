import { Alumno } from 'src/alumno/entities/student.entity';
import { Sancion } from 'src/sancion/entities/sancion.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'alumno_sancion' })
export class AlumnoSancion {
  @PrimaryGeneratedColumn({ name: 'id_alumno_sancion', type: 'int' })
  id_alumno_sancion: number;

  @Column({
    name: 'fecha_inicio',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: false,
  })
  fecha_inicio: Date;

  @ManyToOne(() => Alumno, (student) => student.sanciones, {
    eager: true,
    nullable: false,
  })
  @JoinColumn({ name: 'id_cuenta' })
  alumno: Alumno;

  @ManyToOne(() => Sancion, (sancion) => sancion.sancion, {
    eager: true,
    nullable: false,
  })
  @JoinColumn({ name: 'id_sancion' })
  sancion: Sancion;
}
