import { Component, OnInit } from '@angular/core';
import { Videojuego } from 'src/app/model/videojuego';

@Component({
  selector: 'app-videojuego-detalle',
  templateUrl: './videojuego-detalle.component.html',
  styleUrls: ['./videojuego-detalle.component.scss']
})
export class VideojuegoDetalleComponent implements OnInit {

  titulo: string;
  videojuego: Videojuego;

  constructor() {
    console.trace('VideojuegoDetalleComponent constructor');
    this.titulo = 'Aprendiendo a usar Clases';
    this.videojuego = new Videojuego();

    // llamamos al setter, siempre que este definido
    this.videojuego.titulo = 'Mario Bros';
  }

  ngOnInit() {
    console.trace('VideojuegoDetalleComponent ngOnInit');
  }

}
