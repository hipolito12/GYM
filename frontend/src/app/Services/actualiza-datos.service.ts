import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class ActualizaDatosService {
public  rol:any;
 private _User:boolean = false;
  constructor( public cookie: CookieService, 
   ) { }

  get GUser(){
    return !!localStorage.getItem('token')
  }
  set SetrolUsuario(rol:any)
  {
     this.rol = rol;
  }
  get getrolUsuario()
  {;
    this.rol = Number.parseInt(this.cookie.get('rol'));
    return this.rol;
  }
  
}
