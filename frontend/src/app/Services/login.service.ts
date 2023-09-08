import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private host="localhost:3000/"
  constructor(private http:HttpClient) { }

  Ingresar(user:any)
  {
   return  this.http.post<any>("http://localhost:3000/api/login",user)
    
  }


  Registrar(NewUser:any)
  {
    return this.http.post<any>("http://localhost:3000/api/Signup",NewUser)
  }
}
