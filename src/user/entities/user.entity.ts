import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column({ name: 'id_perfil' })
  id_perfil: number;
}
