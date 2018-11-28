import { Pipe, PipeTransform } from '@angular/core';
import { Videojuego } from '../model/videojuego';

@Pipe({
  name: 'alquilado'
})
export class VideojuegoPipe implements PipeTransform {

  transform(videojuegos: Videojuego[], alquilado: boolean): any {
    console.debug('VideojuegoPipe transform');
    const resul: Videojuego[] = [];

    videojuegos.forEach( el => {
      if ( el.alquilado === alquilado ) {
        resul.push(el);
      }
    });

    return resul;
  }

}
