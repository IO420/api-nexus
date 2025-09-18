import { Injectable } from '@nestjs/common';
import { CreateSancionDto } from './dto/create-sancion.dto';
import { UpdateSancionDto } from './dto/update-sancion.dto';

@Injectable()
export class SancionService {
  create(createSancionDto: CreateSancionDto) {
    return 'This action adds a new sancion';
  }

  findAll() {
    return `This action returns all sancion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sancion`;
  }

  update(id: number, updateSancionDto: UpdateSancionDto) {
    return `This action updates a #${id} sancion`;
  }

  remove(id: number) {
    return `This action removes a #${id} sancion`;
  }
}
