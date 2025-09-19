import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AlumnoSancion } from './entities/alumno_sancion.entity';
import { Repository } from 'typeorm';
import { CreateAlumnoSancionDto } from './dto/create-alumno_sancion.dto';
import { AlumnoService } from 'src/alumno/student.service';
import { SancionService } from 'src/sancion/sancion.service';

@Injectable()
export class AlumnoSancionService {
  constructor(
    @InjectRepository(AlumnoSancion)
    private readonly alumnosancionRepository: Repository<AlumnoSancion>,

    private readonly alumnoService: AlumnoService,
    private readonly sancionService: SancionService,
  ) {}

  async create(
    createAlumnoSancionDto: CreateAlumnoSancionDto,
  ) {
    const { id_sancion, id_cuenta } = createAlumnoSancionDto;

    const alumno = await this.alumnoService.findOne(id_cuenta);
    const sancion = await this.sancionService.findOne(id_sancion);

    if (!alumno)
      throw new NotFoundException(`Alumno ${id_cuenta} no encontrado`);
    if (!sancion)
      throw new NotFoundException(`Sancion ${id_sancion} no encontrada`);

    const alumnosancion = this.alumnosancionRepository.create({
      alumno,
      sancion,
    });

    return await this.alumnosancionRepository.save(alumnosancion);
  }

  findAll() {
    return `This action returns all alumnoSancion`;
  }

  async findOne(id_cuenta: number): Promise<AlumnoSancion> {
    const alusancion = await this.alumnosancionRepository.findOne({
      where: { alumno: { id_cuenta } },
    });
    if (!alusancion) {
      throw new NotFoundException(`Student with ID ${id_cuenta} not found`);
    }
    return alusancion;
  }
}
//IO