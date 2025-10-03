import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AreaUbicacion } from './entities/area_ubicacion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AreaUbicacionService {
  constructor(
    @InjectRepository(AreaUbicacion)
    private readonly areaUbicacionRepository: Repository<AreaUbicacion>,
  ) {}
  findAll() {
    return this.areaUbicacionRepository.find();
  }

  findOne(id_area_ubicacion: number) {
    const area = this.areaUbicacionRepository.findOne({
      where: { id_area_ubicacion },
    });

    if(!area){
      return "this area dosnt exist"
    }

    return area
  }
}
//IO
