import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class UsuariobanService {
  
 
  constructor(private https:HttpClient) {}

 
  Baneados(): Observable<any>
  {
    return this.https.get("http://localhost:3000/api/UsuariosInhabilitados");
  
  }

  Habilitados(): Observable<any>
  {
    return this.https.get("http://localhost:3000/api/UsuariosHabilitados");
  
  }

  Habilitar(dni:any): Observable<any>
  {
    return this.https.put("http://localhost:3000/api/Habilitar",dni);
  
  }

  Desabilitar(dni:any): Observable<any>
  {
    return this.https.put("http://localhost:3000/api/Deshabilitar",dni);
  
  }

}
