import { AlumnoSancion } from 'src/alumno_sancion/entities/alumno_sancion.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'sancion' })
export class Sancion {
  @PrimaryGeneratedColumn({ name: 'id_sancion', type: 'int' })
  id_sancion: number;

  @Column({ name: 'sancion', type: 'varchar', length: 45, nullable: false })
  sancion: string;

  @Column({ name: 'duracion', type: 'int', nullable: false })
  duracion: number;

  @OneToMany(
    () => AlumnoSancion,
    (alusancion) => alusancion.sancion,
  )
  alumnosSancionados: AlumnoSancion[];
}
