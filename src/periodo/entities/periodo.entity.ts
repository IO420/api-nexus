import { DetalleServicio } from 'src/detalle_servicio/entities/detalle_servicio.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'periodo' })
export class Periodo {
  @PrimaryGeneratedColumn({ name: 'id_periodo', type: 'int' })
  id_periodo: number;

  @Column({ type: 'char', length: 6, nullable: false })
  semestre: string;

  @Column({ name: 'fecha_inicio_servicio', type: 'date', nullable: false })
  fecha_inicio_servicio: Date;

  @Column({ name: 'fecha_fin_servicio', type: 'date', nullable: false })
  fecha_fin_servicio: Date;

  @Column({
    type: 'bit',
    width: 1,
    default: () => "b'1'",
  })
  activo: boolean;

  @OneToMany(
    () => DetalleServicio,
    (id_detalle_servicio) => id_detalle_servicio.id_periodo,
  )
  detalles_servicio: DetalleServicio[];
}
