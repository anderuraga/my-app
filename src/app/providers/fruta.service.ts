import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Fruta } from '../model/fruta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FrutaService {

  endpoint: string = 'http://localhost:3000/frutas';

  constructor( public http: HttpClient  ) { 
    console.log('FrutaService constructor');
   
  }

  getAll(): Observable<any> {
    console.trace(`TareaService getAll ${this.endpoint}`);
    return this.http.get( this.endpoint );
  }

  add(frura: Fruta): Observable<any>{
    console.trace(`TareaService add ${this.endpoint}`);
    let body  = {
          // "id": frura.id,
          "nombre": frura.nombre,
          "precio": frura.precio,
          "calorias": 150,
          "oferta": true,
          "descuento": 10,
          "imagen": "https://picsum.photos/300/300/?random",
          "cantidad": 0
        };  
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post( this.endpoint, body , httpOptions );
}

}
