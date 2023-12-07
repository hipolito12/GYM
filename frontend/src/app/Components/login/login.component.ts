import { Component, OnInit,ChangeDetectorRef} from '@angular/core';
import { LoginService } from '../../Services/login.service';
import { Router } from '@angular/router';
import { ActualizaDatosService } from '../../Services/actualiza-datos.service';
import { CookieService } from 'ngx-cookie-service';
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
    private cookie: CookieService,
    private changeDetectorRefs: ChangeDetectorRef
  ) {}
  ngOnInit() {}

    

  Redireccionar(rol: number) {
    switch (rol) {
      case 0:
        this.rout.navigate(['administrador']);
        break;
      case 1:
        this.rout.navigate(['/usuarios/user']);
        break;
      case 2:
        this.rout.navigate(['/empleados/profesores']);
        break;
    }
  }
  Ingresar() {
    this.loginService.Ingresar(this.user).subscribe(
      (res) => {
       
        localStorage.setItem('token', res.token);
        localStorage.setItem('nombre', res.nombre);
        this.cookie.set('rol', res.rol);
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
