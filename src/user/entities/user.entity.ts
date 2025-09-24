import { DetalleServicio } from 'src/detalle_servicio/entities/detalle_servicio.entity';
import { Recibo } from 'src/recibo/entities/recibo.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'perfil' })
export class Perfil {
  @PrimaryGeneratedColumn({ name: 'id_perfil', type: 'int' })
  id_perfil: number;

  @Column({ name: 'perfil', type: 'varchar', length: 45, nullable: false })
  perfil: string;

  @OneToMany(() => User, (user) => user.perfil)
  usuarios: User[];
}

@Entity({ name: 'usuario' })
export class User {
  @PrimaryGeneratedColumn({ name: 'id_usuario', type: 'int' })
  id_usuario: number;

  @Column({ name: 'nombre', type: 'varchar', length: 45, nullable: false })
  nombre: string;

  @Column({
    name: 'apellido_paterno',
    type: 'varchar',
    length: 45,
    nullable: true,
  })
  apellido_paterno: string;

  @Column({
    name: 'apellido_materno',
    type: 'varchar',
    length: 45,
    nullable: true,
  })
  apellido_materno: string;

  @Column({ name: 'usuario', type: 'varchar', length: 45, nullable: false })
  usuario: string;

  @Column({ name: 'password', type: 'varchar', length: 45, nullable: false })
  password: string;

  @Column({
    name: 'activo',
    type: 'tinyint',
    nullable: false,
    default: () => 1,
  })
  activo: number;

  @Column({ name: 'descripcion', type: 'varchar', length: 50, nullable: true })
  descripcion: string;

  @Column({
    name: 'fecha_registro',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  fecha_registro: Date;

  @ManyToOne(() => Perfil, (perfil) => perfil.usuarios, { eager: true })
  @JoinColumn({ name: 'id_perfil' })
  perfil: Perfil;

  @OneToMany(() => DetalleServicio, (detalleServicio) => detalleServicio.user)
  detalles_servicio: DetalleServicio[];

  @OneToMany(() => Recibo, (recibo) => recibo.user)
  recibo: Recibo[];
}
