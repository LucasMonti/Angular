import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Personaje} from '../interfaces/dbz.interfaces';
import {DbzService} from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor(private dbzService: DbzService) { }

  ngOnInit(): void {
  }
// @Output() persons : EventEmitter<Personaje> = new EventEmitter

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  };



  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    this.dbzService.agregarPersonaje(this.nuevo)

      // this.persons.emit(this.nuevo)
  }


}
