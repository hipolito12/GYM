import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonaACargoActividad } from 'models/Types.js';

@Injectable({
  providedIn: 'root',
})
export class personaacargoactividadService {
  constructor(private http: HttpClient) {}

  getPersonasACargo(): Observable<any> {
    return this.http.get('http://localhost:3000/api/personasACargoActividad');
  }

  GetPersonaAcargoById(DniPersonaAcargo: number): Observable<PersonaACargoActividad> {
    return this.http.get<PersonaACargoActividad>(`http://localhost:3000/api/getPersonaACargoActividadById/${DniPersonaAcargo}`);
  }

  updatePersonaAcargo(DniPersonaAcargo: number, personaacargoactividad: PersonaACargoActividad): Observable<any> {
    return this.http.patch<PersonaACargoActividad>(`http://localhost:3000/api/updatePersonaACargoActividad/${DniPersonaAcargo}`, personaacargoactividad);
  }

  createPersonaAcargo(personaacargoactividad: PersonaACargoActividad): Observable<PersonaACargoActividad> {
    return this.http.post<PersonaACargoActividad>('http://localhost:3000/api/createPersonaACargoActividad', personaacargoactividad);
  }

  eliminarPersonaAcargoactividad(DniPersonaAcargo: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/api/deletePersonaACargoActividad/${DniPersonaAcargo}`)
  }

}
