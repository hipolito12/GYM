import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RutinasService {
    constructor(private http: HttpClient) { }

    getAllRutinas():Observable<any>{
      return this.http.get('http://localhost:3000/api/all'); //????? como va la ruta
    }
    /* getRutinaById(id: string){
      return this.http.get('${this.API_URI}/rutinas/${id}');
    }

    deleteRutinaById(id: string){
      return this.http.delete('${this.API_URI}/rutinas/${id}');
    } */
}

