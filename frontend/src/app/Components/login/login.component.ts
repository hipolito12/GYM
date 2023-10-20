import { Component, OnInit, } from '@angular/core';
import { LoginService } from '../../Services/login.service';
import { Router } from '@angular/router';
import { ActualizaDatosService } from '../../Services/actualiza-datos.service';
import Swal from 'sweetalert2';

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



  constructor(
    private loginService: LoginService,
    private rout: Router,
    private Actualiza: ActualizaDatosService,
   
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
        this.rout.navigate(['/profesores']);
        break;
    }
  }
  Ingresar() {
    this.loginService.Ingresar(this.user).subscribe(
      (res) => {
        console.log(res.token);
        console.log(res.contrasena);
        localStorage.setItem('token', res.token);
        localStorage.setItem('nombre', res.nombre);
        console.log(res.nombre);
        this.Actualiza.SetrolUsuario = res.rol; 
        this.Redireccionar(res.rol);
      },
      (err) => {console.log(JSON.stringify(err)) ;
        
        Swal.fire({
          icon: 'error',
          title: 'Error de servidor!, pruebe de nuevo mas tarde',
          toast: true,
          text: 'Pruebe de nuevo',
          
        })
      }
    );
  }
  ValdaLogin() {
    const regex = new RegExp(
      /^(?=.*[A-Z])(?=.*[@#$!%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/
    );
    if (!regex.test(this.user.contrasena) || this.user.contrasena=='' || this.user.dni=='') {
      
   

   

    Swal.fire({
      icon: 'error',
      title: 'El usuario o la contraseña no son validos',
      toast: true,
      text: 'Pruebe de nuevo',
      
    })
    
      return false;

    } else {
      return this.Ingresar();
    }
  }
}
