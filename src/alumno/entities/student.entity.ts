import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'alumno' })
export class Student {
  @PrimaryGeneratedColumn({ name: 'id_cuenta', type: 'int', unsigned: true })
  id_cuenta: number;

  @Column({ name: 'nombre', type: 'varchar', length: 300, nullable: false })
  nombre: string;

  @Column({
    name: 'fecha_nacimiento',
    type: 'varchar',
    length: 8,
    nullable: true,
  })
  fecha_nacimiento: Date | null;

  @Column({ name: 'correo', type: 'varchar', length: 100, nullable: true })
  correo: string | null;

  @Column({
    name: 'credito',
    type: 'decimal',
    precision: 10,
    scale: 2,
    default: 0.0,
  })
  credito: string;

  @Column({
    name: 'fecha_actualizacion_credito',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  fecha_actualizacion_credito: Date;

  @Column({
    name: 'vigente',
    type: 'enum',
    enum: ['si', 'no'],
    default: 'si',
  })
  vigente: 'si' | 'no';

  @Column({ name: 'id_periodo', type: 'int', nullable: true })
  id_periodo: number | null;

  @Column({
    name: 'fecha_registro',
    type: 'datetime',
    nullable: false,
  })
  fecha_registro: Date;

  @Column({ name: 'id_carrera', type: 'int', nullable: false })
  id_carrera: number;

  @Column({ name: 'generacion', type: 'int', width: 4, nullable: true })
  generacion: number | null;
}
