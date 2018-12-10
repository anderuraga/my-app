import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { Observable, BehaviorSubject } from 'rxjs';

const USUARIO_NOMBRE = 'admin';
const USUARIO_PASSWORD = '12345678';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  usuario: Usuario;
  private loggedIn: BehaviorSubject<boolean>;  // Observable

  constructor() {
    console.trace('LoginService constructor');
    this.usuario = undefined;
    this.loggedIn = new BehaviorSubject<boolean>(false);
  }


  // retonamos Observable
  isLogged(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  logout(): void{
    console.trace('LoginService logout');
    this.usuario = undefined;
    this.loggedIn.next(false); // observable retorna false
  }


  login( u: Usuario): boolean{
    console.trace('LoginService login %o',u);
    if (u && u.nombre === USUARIO_NOMBRE && u.password === USUARIO_PASSWORD ){

      console.debug(' usuario logeado');
      this.usuario = u;      
      this.loggedIn.next(true); // observable retorna true
      return true;
    }else{

      console.warn(' usuario no valido');
      this.usuario = undefined;
      this.loggedIn.next(false);  // observable retorna false
      return false;
    }

  }


}
