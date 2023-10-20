import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PagoCuotaService {

  constructor(private http:HttpClient) { }
    DatosPago(pago:any):Observable<any>
    {
      return  this.http.post('http://localhost:3000/api/pagarCuota',pago)
    }

    RegistrarPago(pago:any) :Observable<any>
    {
      return  this.http.post('http://localhost:3000/api/RegistrarPago',pago)

    }

}
