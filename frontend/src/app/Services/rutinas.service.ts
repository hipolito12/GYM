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

  getActiveRutinas(): Observable<any> {
    return this.http.get('http://localhost:3000/api/ActiveRutinas');
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

  updateRutinaActiva(idRutina: number, nuevoValor: number): Observable<any> {
    // Realiza una solicitud PUT al servidor para actualizar el campo 'activo'
    return this.http.put(`http://localhost:3000/api/deleteRutina/${idRutina}`, {
      activo: nuevoValor,
    });
  }
}
