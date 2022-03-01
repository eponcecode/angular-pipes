import { Component } from '@angular/core';

@Component({
  selector: 'app-comunes',
  templateUrl: './comunes.component.html',
  styles: [
  ]
})
export class ComunesComponent {

  nombreLower: string = 'estefania';
  nombreUpper: string = 'ESTEFANIA';
  nombreLargo: string = 'EsteFaNia PonCe dE LeÓN'

  fecha: Date =new Date();// el día de hoy
}
