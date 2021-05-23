import {Component, OnInit} from '@angular/core';
import {Heroe} from '../../interfaces/heroes.interfaces';
import {HeroesService} from '../../services/heroes.service';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {

  termino = '';
  heroes: Heroe[] = [];

  heroeSeleciconado: Heroe | undefined;

  constructor(private heroesService: HeroesService) {
  }

  ngOnInit(): void {
  }

  buscando(): any {
    this.heroesService.getSugerencias(this.termino.trim()).subscribe(
        heroes => this.heroes = heroes);
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent): any {

    if (!event.option.value) {
      this.heroeSeleciconado = undefined;
      return;
    }
    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero;

    this.heroesService.getHeroePorId(heroe.id).subscribe(heroe => this.heroeSeleciconado = heroe);
  }
}
