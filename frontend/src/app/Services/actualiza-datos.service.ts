import { Injectable } from '@angular/core';
import { Route } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ActualizaDatosService {

 private _User:boolean = false;
  constructor() { }

  get GUser(){
    return !!localStorage.getItem('token')
  }

  
}
