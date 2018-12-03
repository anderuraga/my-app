import { Component, OnInit } from '@angular/core';
import { TareaService } from 'src/app/providers/tarea.service';
import { Tarea } from 'src/app/model/tarea';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.scss']
})
export class TareaComponent implements OnInit {

  tareas: Tarea[];

  constructor( public tareaService: TareaService ) {
    console.trace('TareaComponent constructor');
    this.tareas = [];
  }

  ngOnInit() {
    console.trace('TareaComponent ngOnInit');
    // llamar al servicio para carga inicial de las tareas, NO hacerlo en "constructor"
    // Como this.tareaService.getAll() retorna un Observable, debemos suscribirnos a el
    this.tareaService.getAll().subscribe( data =>{
      console.debug('datos recibidos %o', data);
      this.tareas = data.map( el => el);
    });

  }

}
