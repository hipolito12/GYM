import { Component, OnInit } from '@angular/core';
import { RolService } from '../../Services/rol.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rol-update',
  templateUrl: './rol-update.component.html',
  styleUrls: ['./rol-update.component.css'],
})
export class RolUpdateComponent {
  idRol: number = 0;
  pageTitle: string = '';
  nombreRol: string = '';
  descripcionRol: string = '';

  constructor(
    private rolService: RolService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idRol = params.get('id');
      if (idRol) {
        this.idRol = +idRol;
        this.pageTitle = `Editar Rol #${this.idRol}`;
        this.cargarRol(this.idRol);
      }
    });
  }
  cargarRol(idRol: number) {
    this.rolService.GetRolById(idRol).subscribe((rol: any) => {
      this.nombreRol = rol.NombreRol;
      this.descripcionRol = rol.Descripcion;
    });
  }

  UpdateRoles() {
    const rolActualizado = {
      idrol: this.idRol,
      NombreRol: this.nombreRol,
      Descripcion: this.descripcionRol,
    };
    this.rolService.UpdateRol(this.idRol, rolActualizado).subscribe(
      (data: any) => {
        console.log('Rol editado exitosamente', data);
        this.router.navigate(['/roles']);
      },
      (error) => {
        console.error('Error al editar este rol', error);
      }
    );
  }
}
