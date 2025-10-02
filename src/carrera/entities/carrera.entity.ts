import { Alumno } from 'src/alumno/entities/student.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'carrera' })
export class Carrera {
  @PrimaryGeneratedColumn({ name: 'id_carrera', type: 'int', unsigned: true })
  id_carrera: number;

  @Column({
    name: 'carrera',
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  carrera: string;

  @OneToMany(() => Alumno, (student) => student.carrera)
  estudiantes: Alumno[];
}
