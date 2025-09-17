import { BadRequestException, Injectable } from '@nestjs/common';
import { StudentService } from 'src/alumno/student.service';
import { DetalleServicioService } from 'src/detalle_servicio/detalle_servicio.service';
import { DataSource } from 'typeorm';
import { chargePrintDto } from './dto/operations.dto';
import { CreateDetalleServicioDto } from 'src/detalle_servicio/dto/create-detalle_servicio.dto';

@Injectable()
export class OperationsService {
  constructor(
    private readonly dataSource: DataSource,
    private readonly studentService: StudentService,
    private readonly detalleServicioService: DetalleServicioService,
  ) {}

  async chargePrint(data: chargePrintDto, userId: number) {
    const { monto, id_cuenta } = data;

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const credit = await this.studentService.GetCredit(id_cuenta);

      if (credit < monto) {
        throw new BadRequestException('Crédito insuficiente');
      }

      const detalleData: CreateDetalleServicioDto = {
        ...data,
        id_servicio: 1,
        id_usuario: userId,
        fecha_operacion: new Date(),
      };

      await this.detalleServicioService.Create(detalleData, queryRunner.manager);

      await this.studentService.UpdateCredit(
        id_cuenta,
        monto,
        queryRunner.manager,
      );

      await queryRunner.commitTransaction();
      return { message: 'correct' };
    } catch (error) {
      await queryRunner.rollbackTransaction();
      return { message: 'error', error: error.message };
    } finally {
      await queryRunner.release();
    }
  }
}
