import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProgramaEquipoDto } from './dto/create-programa_equipo.dto';
import { UpdateProgramaEquipoDto } from './dto/update-programa_equipo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProgramaEquipo } from './entities/programa_equipo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProgramaEquipoService {
  constructor(
    @InjectRepository(ProgramaEquipo)
    private readonly ProgramaEquipoRepository: Repository<ProgramaEquipo>,
  ) {}

  findAll() {
    return `This action returns all programaEquipo`;
  }

  async findOne(id_equipo: number) {
    const equipo = await this.ProgramaEquipoRepository.find({
      where: { id_equipo },
    });

    if (equipo.length === 0) {
      throw new NotFoundException(`machine without programs`);
    }
    
    return equipo;
  }

  update(id: number, updateProgramaEquipoDto: UpdateProgramaEquipoDto) {
    return `This action updates a #${id} programaEquipo`;
  }
}
