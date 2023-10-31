import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class RutinasPersoService {
  constructor(private http: HttpClient) {}

  getAllRutinasP(): Observable<any> {
    console.log('hola getall 2');
    return this.http.get('http://localhost:3000/api/AllRutinasP');
  }

  getActiveRutinasP(): Observable<any> {
    return this.http.get('http://localhost:3000/api/ActiveRutinasP');
  }

  getAllActividadesP(): Observable<any> {
    return this.http.get('http://localhost:3000/api/AllActividadesP');
  }

  CreateRutinasP(rutina: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/createRutinaP', rutina);
  }

  UpdateRutinasP(idRutina: number, rutina: any): Observable<any> {
    return this.http.put(
      `http://localhost:3000/api/updateRutinaP/${idRutina}`,
      rutina
    );
  }

  getRutinaByIdP(idRutina: number): Observable<any> {
    return this.http.get(
      `http://localhost:3000/api/GetRutinaByIdP/${idRutina}`
    );
  }

  updateRutinaActivaP(idRutina: number, nuevoValor: number): Observable<any> {
    // Realiza una solicitud PUT al servidor para actualizar el campo 'activo'
    return this.http.put(
      `http://localhost:3000/api/deleteRutinaP/${idRutina}`,
      {
        activo: nuevoValor,
      }
    );
  }

  checkDniExist(dni: string): Observable<any> {
    return this.http.get(`http://localhost:3000/api/checkDniExist/${dni}`);
  }
}
