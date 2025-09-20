import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Recibo } from './entities/recibo.entity';
import { EntityManager, Repository } from 'typeorm';
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
}
//IO
