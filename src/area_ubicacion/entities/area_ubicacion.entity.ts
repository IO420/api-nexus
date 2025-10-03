import { Equipo } from 'src/equipo/entities/equipo.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity({ name: 'area_ubicacion' })
export class AreaUbicacion {
  @PrimaryGeneratedColumn({ name: 'id_area_ubicacion' })
  id_area_ubicacion: number;

  @Column({ type: 'varchar', length: 45, nullable: false })
  area: string;

  @Column({ type: 'char', length: 1, default: '0', nullable: false })
  extra: string;

  @OneToMany(() => Equipo, (equipo) => equipo.areaUbicacion)
  equipos: Equipo[];
}
//IO
