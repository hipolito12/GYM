import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from './Services/login.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authService:LoginService,private _router:Router ){}
  canActivate():boolean{
    if(this._authService.LoggedIn())
    {
      return true
    }
    else
    {
      this._router.navigate(['/login'])
      return false
    }
  }
   
  
  
}
