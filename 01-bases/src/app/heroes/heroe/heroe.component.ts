import {Component} from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
nombre: string = 'IronMan'
  edad: number = 45

  obternerNombre(): string {
  return `${this.nombre} - ${this.edad}`
  }

  get nombreCapitalizado() {
  return this.nombre.toUpperCase()
  }


  cambiarNombre(): string{
  return this.nombre= 'Spiderman'
  }

  cambiarEdad(): number {
  return this.edad = 30
  }
}
