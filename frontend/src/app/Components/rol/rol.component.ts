import { Component, ViewChild, ElementRef } from '@angular/core';
import { RolService } from 'src/app/Services/rol.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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
  rolAEditar: Rol | null = null; // Rol que se está editando
  enModoEdicion: boolean = false; // Bandera para controlar si está en modo de edición

  constructor(private rolService: RolService, private router: Router) {
    /*     this.rolAEditar = {
      idrol: 0,
      NombreRol: '',
      Descripcion: '',
    }; */
  }

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
  capturarRol(id: number) {
    this.router.navigate(['/rolesUpdate', id]);
  }
  /*   modificarRol(rol: Rol) {
    console.log(rol);
    this.rolService.UpdateRol(rol).subscribe((data: any) => {
      
    });
  } */
}
