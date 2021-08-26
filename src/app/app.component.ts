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
  title = 'Clase01';
  miUsuario: Usuario;
  numero1: number;
  numero2: number;
  suma: number;
  mensaje: string;

  /**
   *
   */
  constructor() {
    this.numero1 = 0;
    this.numero2 = 0;
    this.suma = 0;
    this.miUsuario = new Usuario();
    this.mensaje = '';
  }
  miMetodo() {
    this.suma = this.numero1 + this.numero2 / 2;
    this.mensaje = 'El promedio es : ';
  }

  limpiar() {
    this.numero1 = 0;
    this.numero2 = 0;
    this.suma = 0;
    this.mensaje = '';
  }
}
