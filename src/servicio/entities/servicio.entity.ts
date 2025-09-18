import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'servicio' })
export class Servicio {
  @PrimaryGeneratedColumn({ name: 'id_servicio', type: 'int' })
  id_servicio: number;

  @Column({ type: 'varchar', length: 45, nullable: false })
  servicio: string;
}
