import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Alumno } from 'src/alumno/entities/student.entity';

@Entity({ name: 'recibo' })
export class Recibo {
  @PrimaryGeneratedColumn({ name: 'id_recibo', type: 'int' })
  id_recibo: number;

  @Column({
    name: 'folio_recibo',
    type: 'varchar',
    length: 45,
    nullable: false,
  })
  folio_recibo: string;

  @Column({
    name: 'monto',
    type: 'decimal',
    nullable: false,
  })
  monto: number;

  @Column({ name: 'fecha_recibo', type: 'date', nullable: false })
  fecha_recibo: Date ;

  @ManyToOne(() => Alumno, (alum) => alum.id_cuenta, {})
  @JoinColumn({ name: 'id_cuenta' })
  alum: Alumno;

  @ManyToOne(() => User, (user) => user.id_usuario, {})
  @JoinColumn({ name: 'id_usuario' })
  user: User;
}
