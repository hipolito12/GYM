import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css'],
})
export class RolComponent {
  rol = {
    Descripcion: '',
    NombreRol: '',
  };
}
