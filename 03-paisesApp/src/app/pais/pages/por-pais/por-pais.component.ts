import {Component, OnInit} from '@angular/core';
import {PaisService} from '../../services/pais.service';
import {Country} from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: []
})
export class PorPaisComponent implements OnInit {
  termino = '';
  hayError = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) {
  }

  ngOnInit(): void {
  }

  // @ts-ignore
  buscar(termino: string): string {

    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(this.termino).subscribe(countries => {
        for (const pais of countries) {
          this.paises.push(pais);
        }
      },
      (err) => {
        console.log(err);
        this.hayError = true;
        this.paises = [];
      });


  }

}
