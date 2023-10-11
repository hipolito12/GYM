import { Component, ViewChild, ElementRef } from '@angular/core';
import { RolService } from 'src/app/Services/rol.service';

interface Rol {
  idrol: number;
  NombreRol: string;
  Descripcion: string;
}

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css'],
})
export class RolComponent {
  roles: Rol[] = [];
  @ViewChild('filtroId', { static: false }) filtroId!: ElementRef;
  constructor(private rolService: RolService) {}

  ngOnInit(): void {
    this.GetRoles();
  }

  GetRoles() {
    this.rolService.getAllRols().subscribe((data: Rol[]) => {
      // Utiliza el tipo Rol aquí
      this.roles = data;
    });
  }

  filtrarPorId() {
    const idFiltrado = this.filtroId.nativeElement.value;
    if (idFiltrado) {
      this.roles = this.roles.filter(
        (rol) => rol.idrol.toString() === idFiltrado
      );
    } else {
      this.GetRoles();
    }
  }
  eliminarRol(id: number) {
    // Lógica para eliminar el rol con el ID especificado
    this.rolService.DeleteRol(id).subscribe((data: any) => {
      // Actualiza la lista de roles después de eliminar
      this.GetRoles();
    });
  }

  modificarRol(id: number) {
    // Lógica para modificar el rol con el ID especificado
    // Redirige a la página de modificación o muestra un formulario de modificación
  }
}
