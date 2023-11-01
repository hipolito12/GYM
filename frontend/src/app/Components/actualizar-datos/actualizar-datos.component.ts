import { Component } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-actualizar-datos',
  templateUrl: './actualizar-datos.component.html',
  styleUrls: ['./actualizar-datos.component.css']
})
export class ActualizarDatosComponent {

  constructor(private userService:UserService) { }

  usuario = 
  {
    nombrecompleto: '',
    sexo: '',
    email: '',
    contrasenanueva: '',
    direccion: '',
    telefono: '',
  }
  

  ActualizarDatos()
  {
    this.userService.ActualizarDatos(localStorage.getItem('token')!,this.usuario).subscribe(
      res=>{
        console.log(res)
      },
      err=>{
        console.log(err.message)
      }
    )
    
  }
}
