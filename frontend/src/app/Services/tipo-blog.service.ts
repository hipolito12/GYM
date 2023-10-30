import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipoBlogService {

  constructor(private http: HttpClient){ }

  getTipoBlog(){
    return this.http.get('http://localhost:3000/api/obtenerTipoBlog');
  }

  crearTiPoBlog(tipoBlog: any){
    return this.http.put('http://localhost:3000/api/crearTipoBlog', tipoBlog);
  }

  ActualizarTipoBlog(tipoBlog: any){
    return this.http.post('http://localhost:3000/api/actualizarTipoBlog', tipoBlog);
  }

  EliminarTipoBlog(id: any){
    return this.http.post('http://localhost:3000/api/eliminarTipoBlog', id);
  }

    DeleteallBlog(id:any){
    return this.http.post('http://localhost:3000/api/eliminarBlogs', id);
  }

}
