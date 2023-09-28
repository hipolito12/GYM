import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  ProximoPago(token:string): Observable<any>
  {
    return this.http.post<any>("http://localhost:3000/api/ProximoPago",token)
  }

}
