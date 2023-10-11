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
}
