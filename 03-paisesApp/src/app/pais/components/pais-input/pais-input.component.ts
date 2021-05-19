import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  termino = '';

  // tslint:disable-next-line:typedef
  buscar() {
this.onEnter.emit(this.termino);
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
