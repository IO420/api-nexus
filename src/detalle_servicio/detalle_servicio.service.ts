import { Injectable } from '@nestjs/common';
import { DetalleServicio } from './entities/detalle_servicio.entity';
import { EntityManager } from 'typeorm';
import { CreateDetalleServicioDto } from './dto/create-detalle_servicio.dto';

@Injectable()
export class DetalleServicioService {
  async Create(data: CreateDetalleServicioDto, manager: EntityManager) {
    const repo = manager.getRepository(DetalleServicio);
    const details = repo.create(data);
    return await repo.save(details);
  }
}
