import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class InformeService {

  constructor(private http: HttpClient) { }

  GetInforme(): Observable<any>
  {
    return this.http.get('http://localhost:3000/api/informe');
  }

}
