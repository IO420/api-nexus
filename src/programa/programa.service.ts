import { Injectable } from '@nestjs/common';
import { CreateProgramaDto } from './dto/create-programa.dto';
import { UpdateProgramaDto } from './dto/update-programa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Programa } from './entities/programa.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProgramaService {
  constructor(
    @InjectRepository(Programa)
    private readonly programaRepository:Repository<Programa>
  ){}
  create(createProgramaDto: CreateProgramaDto) {
    return 'This action adds a new programa';
  }

  findAll() {
    return this.programaRepository.find();
  }

  findOne(id_programa: number) {
    const programa = this.programaRepository.findOne({where:{id_programa}})

    if(!programa){
      return "this program dosnt exist"
    }

    return programa;
  }

  update(id: number, updateProgramaDto: UpdateProgramaDto) {
    return `This action updates a #${id} programa`;
  }

}
