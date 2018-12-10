import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/providers/login.service';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.scss']
})
export class BackofficeComponent implements OnInit {

  constructor(private router: Router , private loginService: LoginService) { 
    console.trace('BackofficeComponent constructor');
  }

  ngOnInit() {
    console.trace('BackofficeComponent ngOnInit');
  }

  logout(){
    console.trace('BackofficeComponent logout');
    this.loginService.logout();
    this.router.navigate(['login']);
  }

}
