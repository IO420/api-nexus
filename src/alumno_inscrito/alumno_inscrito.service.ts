import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAlumnoInscritoDto } from './dto/create-alumno_inscrito.dto';
import { AlumnoInscrito } from './entities/alumno_inscrito.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AlumnoInscritoService {
  constructor(
    @InjectRepository(AlumnoInscrito)
    private readonly alumnoInscritoRepo: Repository<AlumnoInscrito>,
  ) {}

  async create(dto: CreateAlumnoInscritoDto): Promise<AlumnoInscrito> {
    const existing = await this.alumnoInscritoRepo.findOne({
      where: {
        alumno: { id_cuenta: dto.id_cuenta },
        periodo: { id_periodo: dto.id_periodo },
      },
    });

    if (existing) {
      throw new BadRequestException(
        'El alumno ya está inscrito en este periodo y plataforma',
      );
    }

    const alumnoInscrito = this.alumnoInscritoRepo.create(dto);
    return this.alumnoInscritoRepo.save(alumnoInscrito);
  }

  async findAll(): Promise<AlumnoInscrito[]> {
    return this.alumnoInscritoRepo.find({
      relations: ['alumno', 'periodo', 'plataforma'],
    });
  }

  async findByAlumno(id_cuenta: number): Promise<AlumnoInscrito[]> {
    return this.alumnoInscritoRepo.find({
      where: { alumno: { id_cuenta }, periodo: { id_periodo: 27 } },
      relations: ['alumno', 'periodo', 'plataforma'],
    });
  }
}
