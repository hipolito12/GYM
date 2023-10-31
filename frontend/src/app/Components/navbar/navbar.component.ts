import { Component, OnInit } from '@angular/core';
import { ActualizaDatosService } from '../../Services/actualiza-datos.service';
import { LoginService } from '../../Services/login.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(public Actualiza: ActualizaDatosService,
    public logInservice :LoginService,
    public cookie: CookieService) 
  {}
  public rol: number =  Number.parseInt(this.cookie.get('rol')) ;
  ngOnInit() {

  }

}
