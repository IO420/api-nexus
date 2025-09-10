export class DetalleServicioDto {
  id_detalle_servicio: number;
  numero_hojas: number;
  fecha_operacion: Date;
  id_cuenta: number;
  id_servicio: number;
  id_usuario: number;
  id_periodo: number | null;
}
