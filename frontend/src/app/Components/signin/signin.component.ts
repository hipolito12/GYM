import { Component ,ElementRef,OnInit, ViewChild} from '@angular/core';
import { LoginService } from '../../Services/login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
   @ViewChild('toast') toast !: ElementRef

  RepetirContrasena:string='';
  NewUser = 
  {
    dni:'',
    Contrase_a:'',
    nombre:'',
    apellido:'',
    telefono:'',
    email:'',
    sexo:'',
    direccion:'',

  };

  constructor(private loginService: LoginService, private rout: Router) { }
  ngOnInit() {}
  Redireccionar(rol:number) 
  {
    switch (rol) 
    {
      case 0:
        this.rout.navigate(['admin']);
        break;
      case 1:
        this.rout.navigate(['user']);
        break;
      case 2:
        this.rout.navigate(['profesor']);
        break;
     
    }
  }

  VerificaContrasena()
  {
    const regex = new RegExp( /^(?=.*[A-Z])(?=.*[@#$!%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/);
    
    if (!regex.test(this.NewUser.Contrase_a) )
    {
      Swal.fire({
        title: 'Requisitos de la contraseña',
        text: 'La contraseña debe tener al menos 8 caracteres, incluyendo al menos una letra mayúscula y un carácter especial (@, #, $, !, %, ^, &, *, (, ), _, +, {, >, ,, ., ?, ~, \\, -)',
        icon: 'info',
        confirmButtonText: 'Entendido'
      });
    
    }
    else if(this.NewUser.Contrase_a != this.RepetirContrasena)
    {
      alert("Las contraseñas no coinciden");
      
    }
    else
    {
      this.Registrar();
    }
  }

  Registrar()
  {
    this.loginService.Registrar(this.NewUser).subscribe(
      (res) => {
        ;
        localStorage.setItem('token', res.token);
        this.Redireccionar(res.IdRolfk);
      },
      (err) => {console.log(JSON.stringify(err))
        let toast= this.toast.nativeElement
        toast.innerHTML="El usuario o la contraseña no son validos"}
    );
  }



}
