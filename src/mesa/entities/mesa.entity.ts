import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'mesa' })
export class Mesa {
  @PrimaryColumn({ name: 'id_mesa', type: 'int' })
  idMesa: number;

  @Column({ name: 'activo', type: 'tinyint', default: 1 })
  activo: boolean;
}
