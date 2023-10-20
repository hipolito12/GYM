import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VentasService {

  constructor(private http:HttpClient){}

    registrarVenta(data:any):Observable<any>
    {
      return this.http.post('http://localhost:3000/api/ventas',data);
    }
  
}
