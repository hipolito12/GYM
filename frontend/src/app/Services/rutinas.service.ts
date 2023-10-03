import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RutinasService {
    API_URI= 'http://localhost:4200/'
    constructor(private http: HttpClient) { }

    getAllRutinas(){
      return this.http.get<any[]>('${this.API_URI}rutinas');
    }
    /* getRutinaById(id: string){
      return this.http.get('${this.API_URI}/rutinas/${id}');
    }

    deleteRutinaById(id: string){
      return this.http.delete('${this.API_URI}/rutinas/${id}');
    } */
}

