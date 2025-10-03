import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Equipo } from './entities/equipo.entity';

@Injectable()
export class EquipoService {
  constructor(@InjectRepository(Equipo)
private readonly equipoRepository: Repository<Equipo>){}

  findAll() {
    return this.equipoRepository.find();
  }

  findOne(id_equipo: number) {
    return this.equipoRepository.findOne({where:{id_equipo}});
  }
}
//IO