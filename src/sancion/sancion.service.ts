import { Injectable, NotFoundException } from '@nestjs/common';
import { Sancion } from './entities/sancion.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SancionService {
  constructor(
    @InjectRepository(Sancion)
    private readonly sancionRepository: Repository<Sancion>,
  ) {}

  async find(){
    return this.sancionRepository.find()
  }

  async findOne(id_sancion: number): Promise<Sancion> {
    const sancion = await this.sancionRepository.findOne({
      where: { id_sancion },
    });
    if (!sancion) {
      throw new NotFoundException(`Sancion not found`);
    }
    return sancion;
  }
}
//IO
