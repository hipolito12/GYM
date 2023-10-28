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


AddBlog(blog:any):Observable<any>
{
  return this.http.put('http://localhost:3000/api/CreateBlogs', blog);
}

UpdateBlog( blog:any):Observable<any>
{
  return this.http.post('http://localhost:3000/api/UpdateBlogs', blog);
}


DeleteBlog(id:any):Observable<any>
{
  return this.http.post('http://localhost:3000/api/DeleteBlogs',id);

}
}
