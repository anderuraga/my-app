import { Component } from '@angular/core';
import { Usuario } from './model/usuario';
import { LoginService } from './providers/login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'Primera App Angular';
  autor = 'Ander'; 
  logeado: boolean;

  constructor( private loginService: LoginService){
    this.logeado = false;
  }

  ngOnInit() {
    console.trace('AppComponent ngOnInit');    
    this.loginService.isLogged().subscribe( v => this.logeado = v );
  }

  cerrar(){
    this.loginService.logout();
  }


}
