import { DetalleServicio } from 'src/detalle_servicio/entities/detalle_servicio.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity({ name: 'servicio' })
export class Servicio {
  @PrimaryGeneratedColumn({ name: 'id_servicio', type: 'int' })
  id_servicio: number;

  @Column({ type: 'varchar', length: 45, nullable: false })
  servicio: string;
  @OneToMany(
    () => DetalleServicio,
    (id_detalle_servicio) => id_detalle_servicio.id_servicio,
  )
  detalles_servicio: DetalleServicio[];
}
