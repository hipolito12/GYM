import { Component ,OnInit} from '@angular/core';
import { LoginService } from '../../Services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

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
        this.rout.navigate(['profesor']);
        break;
      case 2:
        this.rout.navigate(['alumno']);
        break;
     
    }
  }

  VerificaContrasena()
  {
    if(this.NewUser.Contrase_a != this.RepetirContrasena)
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
        console.log(res);
        localStorage.setItem('token', res.token);
        this.Redireccionar(res.IdRolfk);
      },
      (err) => console.log(JSON.stringify(err))
    );
  }

}
