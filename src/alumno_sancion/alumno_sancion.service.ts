import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AlumnoSancion } from './entities/alumno_sancion.entity';
import { Repository } from 'typeorm';
import { CreateAlumnoSancionDto } from './dto/create-alumno_sancion.dto';
import { Sancion } from 'src/sancion/entities/sancion.entity';
import { AlumnoService } from 'src/alumno/student.service';

@Injectable()
export class AlumnoSancionService {
  constructor(
    @InjectRepository(AlumnoSancion)
    private readonly alumnosancionRepository: Repository<AlumnoSancion>,
  ) {}

  async create(
    createAlumnoSancionDto: CreateAlumnoSancionDto,
  ): Promise<AlumnoSancion> {
    const { id_sancion, id_cuenta } = createAlumnoSancionDto;

    //   Crear la entidad con relaciones
    const alumnosancion = this.alumnosancionRepository.create({
      id_sancion: { id_sancion }, // se asigna por FK
      id_cuenta: { id_cuenta }, // se asigna por FK
    });

    return await this.alumnosancionRepository.save(alumnosancion);
  }

  findAll() {
    return `This action returns all alumnoSancion`;
  }

  async findOne(id_cuenta: number): Promise<AlumnoSancion> {
    const alusancion = await this.alumnosancionRepository.findOne({
      where: { id_cuenta: { id_cuenta } },
    });
    if (!alusancion) {
      throw new NotFoundException(`Student with ID ${id_cuenta} not found`);
    }
    return alusancion;
  }
}
