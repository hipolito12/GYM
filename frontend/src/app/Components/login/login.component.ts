import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = {
    dni: '',
    contrasena: '',
  };

 
  constructor(private loginService: LoginService, private rout: Router) {}
  ngOnInit() {}

  Redireccionar(rol:number) 
  {
    switch (rol) 
    {
      case 0:
        this.rout.navigate(['admin']);
        break;
      case 1:
        this.rout.navigate(['profesor']);
        break;
      case 2:
        this.rout.navigate(['alumno']);
        break;
     
    }
  }
  Ingresar() {
    this.loginService.Ingresar(this.user).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.Redireccionar(res.IdRolfk);
      },
      (err) => console.log(JSON.stringify(err))
    );
  }


 
}
