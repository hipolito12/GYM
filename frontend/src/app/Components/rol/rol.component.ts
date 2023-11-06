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
    this.GetActiveRols();
  }

  GetActiveRols() {
    this.rolService.getActiveRols().subscribe((data: any) => {
      this.roles = data;
    });
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
      this.GetActiveRols();
    }
  }
  eliminarRol(id: number) {
    const confirmar = confirm(
      '¿Estás seguro de que deseas eliminar esta rutina?'
    );

    if (confirmar) {
      // Realiza la solicitud para actualizar el campo 'activo' a 0
      this.rolService.updateRolActiva(id, 0).subscribe(
        () => {
          console.log('Rol eliminado con éxito');
          // Actualiza la lista de rutinas (puedes volver a llamar a GetActiveRutinas o actualizar el arreglo en memoria)
          this.GetActiveRols();
        },
        (error) => {
          console.error('Error al eliminar el rol', error);
        }
      );
    }
  }

  capturarRol(id: number) {
    this.router.navigate(['/rolesUpdate', id]);
  }
}
