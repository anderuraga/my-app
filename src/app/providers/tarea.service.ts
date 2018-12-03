import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarea } from '../model/tarea';


@Injectable({
  providedIn: 'root'
})
export class TareaService {

  endpoint: string = 'http://localhost:3000/tareas';

  constructor( public http: HttpClient ) { 
    console.trace('TareaService constructor');
  }


  getAll(): Observable<any> {
    console.trace(`TareaService getAll ${this.endpoint}`);
    return this.http.get( this.endpoint );
  }

  add(tarea: Tarea): Observable<any>{
    console.trace(`TareaService add ${this.endpoint}`);
    let body  = {
          // "id": tarea.id,
          "titulo": tarea.titulo,
          "terminado": tarea.terminado
        };  
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post( this.endpoint, body , httpOptions );
}


}
