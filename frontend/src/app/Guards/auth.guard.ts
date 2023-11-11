import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from '../Services/login.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authService:LoginService,private _router:Router ,private cookies:CookieService){}
  canActivate():boolean{
    if(this._authService.LoggedIn() && this.cookies.get('rol')==='1' )
    {
      return true
    }
    else
    {
      this._router.navigate(['/home'])
      return false
    }
  }
   
  
  
}
