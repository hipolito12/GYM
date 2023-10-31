import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class ActividadService {
  constructor(private http: HttpClient) {}

  getActiveActividades(): Observable<any> {
    return this.http.get('http://localhost:3000/api/ActiveActividades');
  }

  updateActividadActiva(
    idActividad: number,
    nuevoValor: number
  ): Observable<any> {
    return this.http.put(
      `http://localhost:3000/api/deleteActividad/${idActividad}`,
      {
        activo: nuevoValor,
      }
    );
  }
  GetActividadById(idActividad: number): Observable<any> {
    return this.http.get(
      `http://localhost:3000/api/getActividadById/${idActividad}`
    );
  }
  updateActividad(idActividad: number, actividad: any): Observable<any> {
    return this.http.put(
      `http://localhost:3000/api/updateActividad/${idActividad}`,
      actividad
    );
  }
  createActividad(actividad: any): Observable<any> {
    return this.http.post(
      'http://localhost:3000/api/createActividad',
      actividad
    );
  }
}
