import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAlumnoSancionDto } from './dto/create-alumno_sancion.dto';
import { UpdateAlumnoSancionDto } from './dto/update-alumno_sancion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AlumnoSancion } from './entities/alumno_sancion.entity';
import { Repository } from 'typeorm';
import { Student } from 'src/alumno/entities/student.entity';

@Injectable()
export class AlumnoSancionService {
  constructor(
    @InjectRepository(AlumnoSancion)
    private readonly alumnosancionRepository: Repository<AlumnoSancion>,
  ) {}

  create(createAlumnoSancionDto: CreateAlumnoSancionDto) {
    return 'This action adds a new alumnoSancion';
  }

  findAll() {
    return `This action returns all alumnoSancion`;
  }

  async findOne(id_cuenta: CreateAlumnoSancionDto): Promise<AlumnoSancion> {
    const alusancion = await this.alumnosancionRepository.findOne({
      where: { id_cuenta },
    });
    if (!alusancion) {
      throw new NotFoundException(`Student with ID ${id_cuenta} not found`);
    }
    return alusancion;
  }

  update(id: number, updateAlumnoSancionDto: UpdateAlumnoSancionDto) {
    return `This action updates a #${id} alumnoSancion`;
  }

  remove(id: number) {
    return `This action removes a #${id} alumnoSancion`;
  }
}
