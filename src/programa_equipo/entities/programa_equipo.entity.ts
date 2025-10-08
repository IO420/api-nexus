import { Equipo } from 'src/equipo/entities/equipo.entity';
import { Programa } from 'src/programa/entities/programa.entity';
import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('programa_equipo')
export class ProgramaEquipo {
  @PrimaryColumn({ name: 'id_programa', type: 'int' })
  id_programa: number;

  @PrimaryColumn({ name: 'id_equipo', type: 'int' })
  id_equipo: number;

  @ManyToOne(() => Programa, (programa) => programa.programaEquipos, {
    eager: true,
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'id_programa' })
  programa: Programa;

  @ManyToOne(() => Equipo, (equipo) => equipo.programaEquipos, {
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'id_equipo' })
  equipo: Equipo;
}
