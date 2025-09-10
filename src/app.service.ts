import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
      <h1>Guten Tag</h1>
      <p>Todos los derechos reservados © 2025.</p>
      <p>
        Este sistema ha sido desarrollado con fines académicos y administrativos para la 
        Facultad de Estudios Superiores Acatlán, UNAM. 
        La distribución no autorizada o reproducción parcial o total del presente software está prohibida 
        por las disposiciones establecidas en el reglamento institucional y las leyes vigentes en materia de 
        propiedad intelectual.
      </p>
      <h4>
        Encargado de la parte de programacion Lino 
      </h4>
      <h4>
        Programadores: Carlos, Axel 
      </h4>
    `;
  }
}
