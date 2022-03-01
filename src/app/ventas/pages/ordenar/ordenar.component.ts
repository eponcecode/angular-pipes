import { Component } from '@angular/core';
import { Color, Heore } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  mayusculas: boolean=true;
  ordenar: string =''
  heroes: Heore[] =[
    {
      nombre: 'Superman',
      vuela: true,
      debilidad: 'Kryptonita',
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      debilidad: 'No matar',
      color: Color.negro
    },
    {
      nombre: 'Mujer Maravilla',
      vuela: false,
      debilidad: 'Atada a su propio lazo',
      color: Color.rojo
    },
    {
      nombre: 'Acuaman',
      vuela: false,
      debilidad: 'Por tiempo determinado fuera del agua',
      color: Color.azul
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      debilidad: 'Objetos amarillos',
      color: Color.verde
    },
  ]
  Cambiar(){
    this.mayusculas=!this.mayusculas
  }

  ordenarPor(forma:string){
    this.ordenar=forma;
  }
}
