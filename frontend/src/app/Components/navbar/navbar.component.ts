import { Component, OnInit } from '@angular/core';
import { ActualizaDatosService } from '../../Services/actualiza-datos.service';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(public Actualiza: ActualizaDatosService,public logInservice :LoginService) 
  {}
  ngOnInit() {}

}
