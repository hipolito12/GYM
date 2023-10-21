import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario-ban',
  templateUrl: './usuario-ban.component.html',
  styleUrls: ['./usuario-ban.component.css']
})
export class UsuarioBanComponent {
  public nombre: string = localStorage.getItem('nombre')!;

}
