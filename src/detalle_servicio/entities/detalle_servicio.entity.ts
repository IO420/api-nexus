import { Alumno } from 'src/alumno/entities/student.entity';
import { Periodo } from 'src/periodo/entities/periodo.entity';
import { Servicio } from 'src/servicio/entities/servicio.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'detalle_servicio' })
export class DetalleServicio {
  @PrimaryGeneratedColumn({
    name: 'id_detalle_servicio',
    type: 'int',
    unsigned: true,
  })
  id_detalle_servicio: number;

  @Column('decimal', {
    name: 'monto',
    precision: 10,
    scale: 2,
    nullable: false,
  })
  monto: number;

  @Column({ name: 'numero_hojas', type: 'int', nullable: false, default: 0 })
  numero_hojas: number;

  @Column({
    name: 'fecha_operacion',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: false,
  })
  fecha_operacion: Date;

  @Column()
  id_cuenta:number

    @Column()
  id_servicio:number

  @ManyToOne(() => Alumno, (id_cuenta) => id_cuenta.detalles_servicio, {
    eager: true,
  })
  @JoinColumn({ name: 'id_cuenta' })
  cuenta: Alumno;

  @ManyToOne(() => Servicio, (id_servicio) => id_servicio.detalles_servicio, {
    eager: true,
  })
  @JoinColumn({ name: 'id_servicio' })
  servicio: Servicio;

  @ManyToOne(() => User, (id_perfil) => id_perfil.detalles_servicio, {
    eager: true,
  })
  @JoinColumn({ name: 'id_usuario' })
  id_perfil: User;

  @ManyToOne(() => Periodo, (id_periodo) => id_periodo.detalles_servicio, {
    eager: true,
    nullable: true,
  })
  @JoinColumn({ name: 'id_periodo' })
  id_periodo: Periodo;
}
