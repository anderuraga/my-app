import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flujo-informacion',
  templateUrl: './flujo-informacion.component.html',
  styleUrls: ['./flujo-informacion.component.scss']
})
export class FlujoInformacionComponent implements OnInit {

  titulo: string;
  visible: boolean;
  clase: string;
  textoBoton: string;
  nombre: string;

  constructor() {
    console.trace('FlujoInformacionComponent constructor');
    this.titulo = 'Flujo de la información en la Vista Modelo y Modelo Vista';
    this.visible = true;
    this.clase = 'remarcar2';
    this.textoBoton = 'Ocultar';
    this.nombre = '';
  }

  ngOnInit() {
    console.trace('FlujoInformacionComponent ngOnInit');
  }

  showHide() {
    console.trace('click showHide button');
    this.visible = (this.visible) ? false : true;
    this.textoBoton = (this.visible) ? 'Ocultar' : 'Mostrar';
  }

}
