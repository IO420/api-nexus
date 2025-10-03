import { ProgramaEquipo } from 'src/programa_equipo/entities/programa_equipo.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity({ name: 'programa' })
export class Programa {
  @PrimaryGeneratedColumn({ name: 'id_programa' })
  id_programa: number;

  @Column({ type: 'varchar', length: 45, nullable: false })
  programa: string;

  @OneToMany(() => ProgramaEquipo, (programaEquipo) => programaEquipo.programa)
  programaEquipos: ProgramaEquipo[];
}
