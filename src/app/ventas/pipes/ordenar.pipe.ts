import { Pipe, PipeTransform } from '@angular/core';
import { Heore } from '../interfaces/ventas.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heore[], orden: string = ''): Heore[] {
      if (orden === 'nombre') {
          return heroes = heroes.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1)
      } else if (orden === 'vuela') {
          return heroes = heroes.sort((a, b) => (a.vuela < b.vuela) ? 1 : -1)
      } else if (orden === 'debilidad') {
          return heroes = heroes.sort((a, b) => (a.debilidad > b.debilidad) ? 1 : -1)
      } else if (orden === 'color') {
          return heroes = heroes.sort((a, b) => (a.color > b.color) ? 1 : -1)
      } else {
          return heroes
      }

  }

}
