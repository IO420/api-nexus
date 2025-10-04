import { Plataforma } from 'src/alumno_inscrito/entities/alumno_inscrito.entity';
import { AreaUbicacion } from 'src/area_ubicacion/entities/area_ubicacion.entity';
import { ProgramaEquipo } from 'src/programa_equipo/entities/programa_equipo.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  Unique,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'equipo' })
@Unique('indice_unico_ubicacion', ['ubicacion'])
export class Equipo {
  @PrimaryGeneratedColumn({ name: 'id_equipo', type: 'int' })
  id_equipo: number;

  @Column({ name: 'id_plataforma', type: 'int' })
  id_plataforma: number;

  @Column({ name: 'id_area_ubicacion', type: 'int' })
  id_area_ubicacion: number;

  @Column({ name: 'nombre_equipo', type: 'varchar', length: 45 })
  nombre_equipo: string;

  @Column({ name: 'ubicacion', type: 'varchar', length: 25 })
  ubicacion: string;

  @Column({ name: 'activo', type: 'bit', default: () => "b'1'" })
  activo: boolean;

  @Column({
    name: 'ip',
    type: 'varchar',
    length: 15,
    default: () => "'no service'",
  })
  ip: string;

  @ManyToOne(() => Plataforma, (plataforma) => plataforma.equipos, {
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'id_plataforma' })
  plataforma: Plataforma;

  @ManyToOne(() => AreaUbicacion, (area) => area.equipos, {
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'id_area_ubicacion' })
  areaUbicacion: AreaUbicacion;

  @OneToMany(() => ProgramaEquipo, (programaEquipo) => programaEquipo.equipo)
  programaEquipos: ProgramaEquipo[];
}
