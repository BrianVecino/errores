import { Pipe, PipeTransform } from '@angular/core';
import { Estudiante } from 'src/app/tablas/tablas.component';

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(value: Estudiante, ...args: unknown[]): unknown {
    return `${value.nombre} ${value.apellido}`;
  }

}
