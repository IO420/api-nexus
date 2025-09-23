import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateMesaDto } from './dto/update-mesa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mesa } from './entities/mesa.entity';

@Injectable()
export class MesaService {
  constructor(
    @InjectRepository(Mesa)
    private readonly mesaRepository: Repository<Mesa>,
  ) {}

  async findAll(): Promise<Mesa[]> {
    return await this.mesaRepository.find();
  }

  async updateActivo(id: number, updateMesaDto: UpdateMesaDto) {
    const mesa = await this.mesaRepository.findOne({ where: { idMesa: id } });
    if (!mesa) {
      throw new NotFoundException(`La mesa no fue encontrada`);
    }

    mesa.activo = updateMesaDto.activo;
    return this.mesaRepository.save(mesa);
  }
}
