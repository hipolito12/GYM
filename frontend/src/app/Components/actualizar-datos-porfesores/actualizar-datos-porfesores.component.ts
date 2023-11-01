import { Component } from '@angular/core';

@Component({
  selector: 'app-actualizar-datos-porfesores',
  templateUrl: './actualizar-datos-porfesores.component.html',
  styleUrls: ['./actualizar-datos-porfesores.component.css']
})
export class ActualizarDatosPorfesoresComponent {
  nombre :string|null = localStorage.getItem('nombre');

  
}
