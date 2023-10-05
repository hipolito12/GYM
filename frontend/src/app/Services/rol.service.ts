import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RolService {
  constructor(private http: HttpClient) {}

  getAllRols(): Observable<any> {
    return this.http.get('http://localhost:3000/api/allRols');
  }

  createRol(rol: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/createRol', rol);
  }

  UpdateRol(rol: any): Observable<any> {
    return this.http.put('http://localhost:3000/api/updateRol', rol);
  }

  DeleteRol(rol: any): Observable<any> {
    return this.http.delete('http://localhost:3000/api/deleteRol', rol);
  }
}
