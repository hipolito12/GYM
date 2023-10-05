import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MisRutinasService {

  constructor(private https :HttpClient) { }

  GetRutinasGenericas():Observable<any>
  {
    return  this.https.get<any>("http://localhost:3000/api/rutinasGenericas")
  }

  GetRutinasPersonalizadas(token:string):Observable<any>
  {
    return this.https.post<any>("http://localhost:3000/api/misrutinas",token)
  }
}
