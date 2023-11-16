import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class CuotaService {

  constructor(private http:HttpClient) { }


  getCuota():Observable<any>{
    return this.http.get('http://localhost:3000/api/ValorCuota');
  }

  UpdateCuota(precio:any):Observable<any>
  {
    return this.http.post('http://localhost:3000/api/ActualizaPrecio', {precio});
  }

  
}
