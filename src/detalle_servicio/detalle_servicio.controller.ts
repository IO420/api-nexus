import { Controller } from '@nestjs/common';
import { DetalleServicioService } from './detalle_servicio.service';


@Controller('detalle-servicio')
export class DetalleServicioController {
  constructor(private readonly detalleServicioService: DetalleServicioService) {}

}
