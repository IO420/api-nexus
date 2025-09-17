import { IsInt, IsNotEmpty, Min } from "class-validator";

export class chargePrintDto {

  @IsInt()
  @IsNotEmpty()
  @Min(1)
  monto:number

  @IsInt()
  @Min(1)
  @IsNotEmpty()
  numero_hojas: number;

  @IsInt()
  @IsNotEmpty()
  id_cuenta: number;
}
