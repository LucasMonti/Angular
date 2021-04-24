import {Injectable} from '@angular/core';
import {Personaje} from '../interfaces/dbz.interfaces';

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [{
      nombre: 'personaje1',
      poder: 15000
    },
      {
        nombre: 'personaje2',
        poder: 7500
      },
      {
        nombre: 'personaje3',
        poder: 750
      }
    ];

  get personajes(): Personaje[]  {
    console.log(this._personajes, '_thisPersonajes');
    return [...this._personajes]
  }

  constructor() {
  }

  agregarPersonaje (personaje: Personaje) {
    console.log(personaje);
      this._personajes.push(personaje)
  }
}
