import { Component, OnInit } from '@angular/core';
import{UserService} from '../../Services/user.service';

@Component({
  selector: 'app-datos-perfil',
  templateUrl: './datos-perfil.component.html',
  styleUrls: ['./datos-perfil.component.css']
})
export class DatosPerfilComponent implements OnInit {
  usuario = 
  {
    nombrecompleto: '',
    sexo: '',
    email: '',
    contrasenanueva: '',
    direccion: '',
    telefono: '',
  }
  constructor(private userService:UserService) { }

  ngOnInit(): void {
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


