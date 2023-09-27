import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private host="localhost:3000/"
  constructor(private http:HttpClient,private route:Router) { }

  Ingresar(user:any):Observable<any>
  {
   return  this.http.post<any>("http://localhost:3000/api/login",user)
    
  }


  Registrar(NewUser:any):Observable<any>
  {
    return this.http.post<any>("http://localhost:3000/api/Signup",NewUser)
  }


  LoggedIn():boolean
  {
    return !!localStorage.getItem('token')
  }
  logOut()
  {
    localStorage.removeItem('token');
    this.route.navigate(['login']);
  }
}
