import { Component, OnInit } from '@angular/core';
import { RolService } from 'src/app/Services/rol.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rol-add',
  templateUrl: './rol-add.component.html',
  styleUrls: ['./rol-add.component.css'],
})
export class RolAddComponent implements OnInit {
  nombreRol: string = '';
  descripcionRol: string = '';

  constructor(private rolService: RolService, private router: Router) {}

  ngOnInit(): void {}

  postRoles() {
    const nuevoRol = {
      nombre: this.nombreRol,
      descripcion: this.descripcionRol,
    };

    this.rolService.createRol(nuevoRol).subscribe(
      (data: any) => {
        // Puedes manejar la respuesta aquí si es necesario
        console.log('Rol creado exitosamente', data);

        // Redirigir al usuario a la página de visualización de roles u otra página después de crear el rol
        this.router.navigate(['/roles']);
      },
      (error) => {
        // Manejar errores si es necesario
        console.error('Error al crear el rol', error);
      }
    );
  }
}
