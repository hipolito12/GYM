import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})


export class ActividadDocenteService {
  putActividadDocente(modificacion: { cupo: string; nombre: string; descripcion: string; horaInicio: string; horafin: string; turno: string; }) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }


  getActividadDocente(){
    return this.http.get('http://localhost:3000/api/actividadDocente');
  }

  ActualizarActividad(actividad:any){
    return this.http.post('http://localhost:3000/api/ActualizarDocente',actividad);
  }
}
