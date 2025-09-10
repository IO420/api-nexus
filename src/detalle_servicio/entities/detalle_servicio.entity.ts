import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
  monto: string;

  @Column({ name: 'numero_hojas', type: 'int', nullable: false, default: 0 })
  numero_hojas: number;

  @Column({
    name: 'fecha_operacion',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: false,
  })
  fecha_operacion: Date;

  @Column({ name: 'id_cuenta', type: 'int', nullable: false })
  id_cuenta: number;

  @Column({ name: 'id_servicio', type: 'int', nullable: false })
  id_servicio: number;

  @Column({ name: 'id_usuario', type: 'int', nullable: false })
  id_usuario: number;

  @Column({ name: 'id_perido', type: 'int', default: null })
  id_periodo: number;
}

/*   `id_detalle_servicio` int(11) NOT NULL AUTO_INCREMENT,
  `monto` decimal(10,2) NOT NULL,
  `numero_hojas` int(11) NOT NULL DEFAULT 0,
  `fecha_operacion` timestamp NOT NULL DEFAULT current_timestamp(),
  `id_cuenta` int(9) unsigned zerofill NOT NULL,
  `id_servicio` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_periodo` int(11) DEFAULT NULL,*/
