import { Component, OnInit } from '@angular/core';
import { RutinasPersoService } from 'src/app/Services/rutinas-perso.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rutinas-perso-update',
  templateUrl: './rutinas-perso-update.component.html',
  styleUrls: ['./rutinas-perso-update.component.css'],
})
export class RutinasPersoUpdateComponent {
  idRutina: number = 0;
  pageTitle: string = '';

  nroActividad: string = '';
  descripcion: string = '';
  imagenURL: string = '';
  tipoRutina: string = '';
  actividades: any[] = [];

  constructor(
    private rutinasPersoService: RutinasPersoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idRutina = params.get('id');
      if (idRutina) {
        this.idRutina = +idRutina;
        this.pageTitle = `Editar Rutina #${this.idRutina}`;
        this.cargarRutina(this.idRutina);
      }
    });
  }
  UpdateRutinasP() {
    const rutinaActualizada = {
      id: this.idRutina,
      nroAct: this.nroActividad,
      descripcion: this.descripcion,
      imagen: this.imagenURL,
      tipo: this.tipoRutina,
      fechaAct: new Date().toISOString().split('T')[0],
    };
    this.rutinasPersoService
      .UpdateRutinasP(this.idRutina, rutinaActualizada)
      .subscribe(
        (data: any) => {
          console.log('Rutina editada exitosamente', data);

          this.router.navigate(['/rutinasPerso']);
        },
        (error) => {
          console.error('Error al editar esta rutina', error);
        }
      );
  }

  cargarRutina(idRutina: number) {
    this.rutinasPersoService
      .getRutinaByIdP(idRutina)
      .subscribe((rutina: any) => {
        this.nroActividad = rutina.actividad.ActividadId;
        this.descripcion = rutina.DescripcionRutina;
        this.imagenURL = rutina.Imagenes;
        this.tipoRutina = rutina.tiporutina.idTipoRutina;
      });
  }
}
