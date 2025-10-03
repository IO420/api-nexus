import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Recibo } from './entities/recibo.entity';
import { Between, EntityManager, Repository } from 'typeorm';
import { CreateReciboDto } from './dto/create-recibo.dto';

@Injectable()
export class ReciboService {
  constructor(
    @InjectRepository(Recibo)
    private readonly reciboRepository: Repository<Recibo>,
  ) {}

  async findOne(folio_recibo: string) {
    const recibo = await this.reciboRepository.findOne({
      where: { folio_recibo },
    });
    return recibo;
  }

  async create(data: CreateReciboDto, manager: EntityManager) {
    const repo = manager.getRepository(Recibo);
    const details = repo.create(data);
    return await repo.save(details);
  }

  async findByDateRange(desde: string, hasta: string) {
    // Convertimos strings a objetos Date
    const fechaDesde = new Date(desde);
    const fechaHasta = new Date(hasta);

    return await this.reciboRepository.find({
      where: {
        fecha_recibo: Between(fechaDesde, fechaHasta),
      },
    });
  }
}
//IO
