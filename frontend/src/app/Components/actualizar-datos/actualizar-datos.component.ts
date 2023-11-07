import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-actualizar-datos',
  templateUrl: './actualizar-datos.component.html',
  styleUrls: ['./actualizar-datos.component.css']
})
export class ActualizarDatosComponent {

  constructor(private userService:UserService,private rout:Router) { }

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
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "info",
          title: "Cambios guardados correctamente"
        });
        this.rout.navigate(['/perfil'])
      },
      err=>{
        console.log(err.message)
      }
    )
    
  }
}
