import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'usuario' })
export class User {
  @PrimaryGeneratedColumn({ name: 'id_usuario', type: 'int' })
  id_usuario: number;

  @Column({ name: 'nombre', type: 'varchar' })
  nombre: string;

  @Column({ name: 'apellido_paterno', type: 'varchar' })
  apellido_paterno: string;

  @Column({ name: 'apellido_materno', type: 'varchar' })
  apellido_materno: string;

  @Column({ name: 'usuario', type: 'varchar' })
  usuario: string;

  @Column({ name: 'password', type: 'varchar', length: 45, nullable: false })
  password: string;

  @Column({ name: 'activo', type: 'tinyint', nullable: false, default: 1 })
  activo: number;

  @Column({ name: 'descripcion', type: 'varchar', length: 50, default: null })
  description: boolean;

  @Column({ name: 'fecha_registro', type: 'varchar' })
  fecha_registro: string;

  @ManyToOne(() => Perfil, (perfil) => perfil.usuarios, { eager: true })
  @JoinColumn({ name: 'id_perfil' })
  perfil: Perfil;
}

@Entity({ name: 'perfil' })
export class Perfil {
  @PrimaryGeneratedColumn({ name: 'id_perfil', type: 'int' })
  id_perfil: number;

  @Column({ name: 'perfil', type: 'varchar', length: 45, nullable: false })
  perfil: string;

  // Relación uno a muchos con usuario
  @OneToMany(() => User, (user) => user.perfil)
  usuarios: User[];
}