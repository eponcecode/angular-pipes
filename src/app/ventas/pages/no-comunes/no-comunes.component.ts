import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  constructor() {
    this.contador= 0
    this.cliente=this.clientes[this.contador].nombre
    this.genero=this.clientes[this.contador].genero
  }
  
  //i18nSelect
  cliente: string= '';
  genero: string = '';
  contador: number = 0
  clientes = [
    {
      nombre: 'Estefanía',
      genero: 'femenino'
    },
    {
      nombre: 'Arturo',
      genero: 'masculino'
    },
    {
      nombre: 'Andrea',
      genero: 'femenino'
    },
    {
      nombre: 'Juan',
      genero: 'masculino'
    }
  ]

  invitacionMapa={
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  cambiarCliente(){
    this.contador++
    if(this.contador=== this.clientes.length)
    this.contador=0
    this.cliente=this.clientes[this.contador].nombre
    this.genero=this.clientes[this.contador].genero
  }
  //i18nPlural
  clientesArray: string[]= ['Estefanía', 'Arturo','Andrea','Juan'] 
  clientesBack : string[]= ['Estefanía', 'Arturo','Andrea','Juan'] 

  clientesMapa={
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  borrarCliente(){
    this.clientesArray.shift()
  }


  //KeyValue Pipe

 persona ={
   nombre: 'Arturo',
   edad: 49,
   direccion: 'Puebla, México'
 }

 
//Json Pipe

heroes = [
  {
    nombre: 'Batman',
    vuela: false,
    debilidad: 'regla no matar'
  },
  {
    nombre: 'Mujer maravilla',
    vuela: false
  }
]

//Async Pipe

miObservable = interval(1000)
valorPromesa =  new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve('Tenemos los datos de la promesa');

  },3500)
})

}

