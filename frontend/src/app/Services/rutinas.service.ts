import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class RutinasService {
  constructor(private http: HttpClient) {}

  getAllRutinas(): Observable<any> {
    return this.http.get('http://localhost:3000/api/AllRutinas');
  }

  getAllActividades(): Observable<any> {
    return this.http.get('http://localhost:3000/api/AllActividades');
  }

  createRutina(rutina: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/createRutina', rutina);
  }

  updateRutina(idRutina: number, rutina: any): Observable<any> {
    return this.http.put(
      `http://localhost:3000/api/updateRutina/${idRutina}`,
      rutina
    );
  }

  GetRutinaById(idRutina: number): Observable<any> {
    return this.http.get(`http://localhost:3000/api/GetRutinaById/${idRutina}`);
  }
}
