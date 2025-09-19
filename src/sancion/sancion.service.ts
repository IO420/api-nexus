import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSancionDto } from './dto/create-sancion.dto';
import { UpdateSancionDto } from './dto/update-sancion.dto';
import { Sancion } from './entities/sancion.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SancionService {
  constructor(
    @InjectRepository(Sancion)
    private readonly sancionRepository: Repository<Sancion>
  ){}
  create(createSancionDto: CreateSancionDto) {
    return 'This action adds a new sancion';
  }

  findAll() {
    return `This action returns all sancion`;
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

  update(id: number, updateSancionDto: UpdateSancionDto) {
    return `This action updates a #${id} sancion`;
  }

  remove(id: number) {
    return `This action removes a #${id} sancion`;
  }
}
//IO