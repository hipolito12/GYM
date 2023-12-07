import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipoRutinasService {

  constructor(private http: HttpClient){ }



  getTipoRutinas(){
    return this.http.get('http://localhost:3000/api/getTipos');
  }
  createTipoRutina(Tipo:any){
    return this.http.put('http://localhost:3000/api/addTipo',Tipo);
  }

  UpdateTipoRutina(Tipo:any){
    return this.http.post('http://localhost:3000/api/updateTipo',Tipo);

  }

  DeleteTipoRutina(Tipo:any){
    return this.http.post('http://localhost:3000/api/deleteTipo',Tipo);
  }
}
