import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.scss']
})
export class FrutaComponent implements OnInit {

  // Atributos declarar y no inicializar
  titulo: string;
  frutas: string[];

  constructor() {
    console.trace('FrutaComponent constructor');
    this.titulo = 'fruta';
    this.frutas = ['fresa', 'platano', 'mango', 'kiwi'];
  }

  ngOnInit() {
    console.trace('FrutaComponent ngOnInit');
  }

}
