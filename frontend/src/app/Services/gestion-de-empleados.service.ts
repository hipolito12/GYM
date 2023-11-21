import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class GestionDeEmpleadosService {

  constructor(private http:HttpClient) { }

  getEmpleados():Observable<any>{
    return this.http.get('http://localhost:3000/api/AllEmpleados');
  }

  AddEmpleado(empleado:any):Observable<any>{
    return this.http.put('http://localhost:3000/api/AddEmpleado',empleado);
  }

  DeleteEmpleado(empleado:any):Observable<any>{
    return this.http.post('http://localhost:3000/api/DeleteEmpleado',empleado);
  }

  DeleteEmpleadoEnActividad(empleado:any):Observable<any>{
    return this.http.post('http://localhost:3000/api/DeleteEmpleadosEnActividad',empleado);
  }

  UpdateEmpleado(empleado:any):Observable<any>{
    return this.http.post('http://localhost:3000/api/UpdateEmpleado',empleado);
  }


  getroles():Observable<any>{
    return this.http.get('http://localhost:3000/api/TiposRol');
  }

}
