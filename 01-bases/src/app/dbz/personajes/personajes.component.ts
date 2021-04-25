import {Component, OnInit} from '@angular/core';
import {DbzService} from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {



  constructor(private dbzPersonajes: DbzService) {

  }

  ngOnInit(): void {

  }

  get persons() {
    console.log(this.dbzPersonajes);
  return this.dbzPersonajes.personajes
  }

}
