import { Injectable } from '@angular/core';
import { Route } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ActualizaDatosService {
public  rol:any;
 private _User:boolean = false;
  constructor() { }

  get GUser(){
    return !!localStorage.getItem('token')
  }
  set SetrolUsuario(rol:any)
  {
     this.rol = rol;
  }
  get getrolUsuario()
  {;
    return this.rol;
  }
  
}
