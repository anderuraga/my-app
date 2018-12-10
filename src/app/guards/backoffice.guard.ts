import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../providers/login.service';

@Injectable({
  providedIn: 'root'
})
export class BackofficeGuard implements CanActivate {

  constructor(
    private loginService: LoginService, 
    private router: Router) 
    {
      console.trace('BackofficeGuard constructor');
    }


  canActivate(   
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    console.trace('BackofficeGuard canActivate');
    /*
    if ( !this.loginService.isLogged() ){            
      this.router.navigate(['login']);
      return false;
    }*/

    // Ahora retornamos un observable y no usamos router => ponemos varias rutas de navegacion con *ngIf
    return this.loginService.isLogged();
    
  }
}
