import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private host="localhost:3000/"
  constructor(private http:HttpClient,private route:Router, 
    private cookie :CookieService) { }

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
    localStorage.removeItem('nombre');
    this.cookie.delete('rol')
    this.route.navigate(['login']);
  }
  getToken() {
    return localStorage.getItem('token');
  }
}
