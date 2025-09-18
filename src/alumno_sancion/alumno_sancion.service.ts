import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AlumnoSancion } from './entities/alumno_sancion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AlumnoSancionService {
  constructor(
    @InjectRepository(AlumnoSancion)
    private readonly alumnosancionRepository: Repository<AlumnoSancion>,
  ) {}

  findAll() {
    return `This action returns all alumnoSancion`;
  }

  async findOne(id_cuenta: number): Promise<AlumnoSancion> {
    const alusancion = await this.alumnosancionRepository.findOne({
      where: { id_cuenta:{id_cuenta} },
    });
    if (!alusancion) {
      throw new NotFoundException(`Student with ID ${id_cuenta} not found`);
    }
    return alusancion;
  }
}
