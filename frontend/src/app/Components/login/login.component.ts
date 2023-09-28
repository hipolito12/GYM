import { Component, ElementRef, OnInit,Renderer2, ViewChild } from '@angular/core';
import { LoginService } from '../../Services/login.service';
import { Router } from '@angular/router';
import { ActualizaDatosService } from '../../Services/actualiza-datos.service';

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
@ViewChild('toast') toast !: ElementRef


  constructor(
    private loginService: LoginService,
    private rout: Router,
    private Actualiza: ActualizaDatosService,
    private render: Renderer2
  ) {}
  ngOnInit() {}

    

  Redireccionar(rol: number) {
    switch (rol) {
      case 0:
        this.rout.navigate(['admin']);
        break;
      case 1:
        this.rout.navigate(['user']);
        break;
      case 2:
        break;
    }
  }
  Ingresar() {
    this.loginService.Ingresar(this.user).subscribe(
      (res) => {
        console.log(res.token);
        localStorage.setItem('token', res.token);
        localStorage.setItem('nombre', res.nombre);
        console.log(res.nombre);
        this.Redireccionar(res.rol);
      },
      (err) => {console.log(JSON.stringify(err)) ;
        let toast= this.toast.nativeElement
        toast.innerHTML="El usuario o la contraseña no son validos";}
    );
  }
  ValdaLogin() {
    const regex = new RegExp(
      /^(?=.*[A-Z])(?=.*[@#$!%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/
    );
    if (!regex.test(this.user.contrasena) || this.user.contrasena=='' || this.user.dni=='') {
      
   let toast= this.toast.nativeElement;

    toast.innerHTML="El usuario o la contraseña no son validos";
    
      return false;

    } else {
      return this.Ingresar();
    }
  }
}
