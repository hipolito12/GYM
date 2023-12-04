import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class personaacargoactividadService {
  constructor(private http: HttpClient) {}

  getPersonasACargo(): Observable<any> {
    return this.http.get('http://localhost:3000/api/personasACargoActividad');
  }

 
  GetPersonaAcargoById(DniPersonaAcargo: number): Observable<any> {
    return this.http.get(
      `http://localhost:3000/api/getPersonaACargoActividadById/${DniPersonaAcargo}`
    );
  }
  updatePersonaAcargo(DniPersonaAcargo: number, personaacargoactividad: any): Observable<any> {
    return this.http.put(
      `http://localhost:3000/api/updateActividad/${DniPersonaAcargo}`,
      personaacargoactividad
    );
  }
  createPersonaAcargo(actividad: any): Observable<any> {
    return this.http.post(
      'http://localhost:3000/api/createPersonaACargoActividad',
      actividad
    );
  }
}
