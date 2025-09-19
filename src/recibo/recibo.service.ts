import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Recibo } from './entities/recibo.entity';
import { Repository } from 'typeorm';
import { CreateReciboDto } from './dto/create-recibo.dto';
import { AlumnoService } from 'src/alumno/student.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class ReciboService {
  constructor(
    @InjectRepository(Recibo)
    private readonly reciboRepository:Repository<Recibo>,
    private readonly alumnoService:AlumnoService,
    private readonly usuarioService:UserService,
  ){}
  
  async findOne(folio_recibo: string) {
    const recibo = await this.reciboRepository.findOne({
      where: { folio_recibo },
    });
    return recibo;
  }

  async create(data: CreateReciboDto, id_usuario: number) {
    const {id_cuenta,folio_recibo} = data
    const receipt = await this.findOne(folio_recibo) 

    if(receipt){
      throw new ConflictException('Recibo ya existe');
    }

    const alumno = await this.alumnoService.findOne(id_cuenta)
    const usuario = await this.usuarioService.findOne(id_usuario)

    console.log(usuario)
    const recibo = this.reciboRepository.create({
      folio_recibo: data.folio_recibo,
      monto: data.monto,
      fecha_recibo: data.fecha_recibo,
      alum: alumno,
      user:usuario
    });

    console.log(recibo)
    await this.reciboRepository.save(recibo)
    return;
  }
}
//IO