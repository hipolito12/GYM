import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import {LoginService} from '../Services/login.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService  implements HttpInterceptor{

  constructor(private loginService: LoginService ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let tokenizeReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.loginService.getToken()}`
      }
    });
    return next.handle(tokenizeReq);
      
  }
}
