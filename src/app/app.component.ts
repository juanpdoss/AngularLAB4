import { Component } from '@angular/core';
import { Usuario } from './clases/usuario';

//decorador, q comportamiento tiene mi clase AppComponent
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

//la hace visible dentro del modulo en el q esta creado
export class AppComponent {
  miUsuario: Usuario;
  title = 'cambioTitle';
  otraVariable = 'seteado en clase AppComponent';
  numero1: number;
  numero2: number;
  suma: number;

  /**
   *
   */
  constructor() {
    this.numero1 = 0;
    this.numero2 = 0;
    this.suma = 0;
    this.miUsuario = new Usuario();
  }
  miMetodo() {
    //this.title = 'lo cambio la funcion';
    this.suma = this.numero1 + this.numero2;

    console.log('ok');
  }

  limpiar() {
    this.title = '';
    this.numero1 = 0;
    this.numero2 = 0;
  }
}
