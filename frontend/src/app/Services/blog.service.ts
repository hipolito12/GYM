import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) { }

  getBlog():Observable<any>{
    return this.http.get('http://localhost:3000/api/Blogs');
  }

getTipoBlog():Observable<any>
{
  return this.http.get('http://localhost:3000/api/TipoBlog');
}

}
