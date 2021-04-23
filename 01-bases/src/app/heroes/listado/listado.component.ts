import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'

})
export class ListadoComponent implements OnInit {

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit')
  }

  heroes : string[] = ['heroe1', 'heroe2', 'heroe3', 'heroe4']

    bandera : any
    heroesBorrados: any = []
  borrarHeroe() {
    let heroeDeleted: any = this.heroes.splice(2, 1)
    console.log(heroeDeleted, 'heroeDeleted');
    this.heroesBorrados.push(heroeDeleted[0])
    console.log(this.heroesBorrados);
    this.bandera = !!this.heroesBorrados
    console.log(this.bandera);

  }

}
