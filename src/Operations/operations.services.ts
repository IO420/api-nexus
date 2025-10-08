import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { AlumnoService } from 'src/alumno/student.service';
import { DetalleServicioService } from 'src/detalle_servicio/detalle_servicio.service';
import { DataSource } from 'typeorm';
import { chargePrintDto } from './dto/operations.dto';
import { UserService } from 'src/user/user.service';
import { ReciboService } from 'src/recibo/recibo.service';

@Injectable()
export class OperationsService {
  constructor(
    private readonly dataSource: DataSource,
    private readonly alumnoService: AlumnoService,
    private readonly detalleServicioService: DetalleServicioService,
    private readonly userService: UserService,
    private readonly reciboService: ReciboService,
  ) {}

  async chargePrint(data: chargePrintDto, id_usuario: number) {
    const { monto, id_cuenta } = data;

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const credit = await this.alumnoService.GetCredit(id_cuenta);

      if (credit < monto) {
        throw new BadRequestException('Crédito insuficiente');
      }

      const user = await this.userService.findOne(id_usuario);
      const alum = await this.alumnoService.findOne(id_cuenta);

      const detalleData = {
        servicio: 1,
        user,
        alum,
        monto,
        fecha_operacion: new Date(),
      };

      await this.detalleServicioService.Create(
        detalleData,
        queryRunner.manager,
      );

      await this.alumnoService.collectCredit(
        id_cuenta,
        monto,
        queryRunner.manager,
      );

      await queryRunner.commitTransaction();
      return { message: 'correct' };
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new InternalServerErrorException(error.message);
    } finally {
      await queryRunner.release();
    }
  }

  async addCredit(data, id_usuario: number) {
    const { id_cuenta, monto, fecha_recibo, folio_recibo } = data;

    const ticket = await this.reciboService.findOne(folio_recibo);

    if (ticket) {
      throw new BadRequestException('Ticket ya existente');
    }

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    const user = await this.userService.findOne(id_usuario);
    const alum = await this.alumnoService.findOne(id_cuenta);

    try {
      const detalleData = {
        folio_recibo,
        user,
        alum,
        fecha_recibo,
        monto,
      };

      await this.reciboService.create(detalleData, queryRunner.manager);

      await this.alumnoService.addCredit(id_cuenta, monto, queryRunner.manager);

      await queryRunner.commitTransaction();
      return { message: 'correct' };
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new InternalServerErrorException(error.message);
    } finally {
      await queryRunner.release();
    }
  }
}
