import { Component } from '@angular/core';
import { ActividadService } from '../../Services/actividad.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actividad-update',
  templateUrl: './actividad-update.component.html',
  styleUrls: ['./actividad-update.component.css'],
})
export class ActividadUpdateComponent {
  idActividad: number = 0;
  pageTitle: string = '';

  nombreActividad: string = '';
  turnoAct: string = '';
  horaInicio: string = '';
  horaFin: string = '';
  descripcion: string = '';
  cupo: number = 0;

  constructor(
    private actividadService: ActividadService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idActividad = params.get('id');
      if (idActividad) {
        this.idActividad = +idActividad;
        this.pageTitle = `Editar Actividad #${this.idActividad}`;
        this.cargarActividad(this.idActividad);
      }
    });
  }
  UpdateActividad1() {
    const actividadActualizada = {
      nombre: this.nombreActividad,
      turno: this.turnoAct,
      horaI: this.horaInicio,
      horaF: this.horaFin,
      descrip: this.descripcion,
      cupo: this.cupo,
    };
    this.actividadService
      .updateActividad(this.idActividad, actividadActualizada)
      .subscribe(
        (data: any) => {
          console.log('Actividad editada exitosamente', data);

          this.router.navigate(['/actividad']);
        },
        (error) => {
          console.error('Error al editar esta actividad', error);
        }
      );
  }

  cargarActividad(idActividad: number) {
    this.actividadService
      .GetActividadById(idActividad)
      .subscribe((actividad: any) => {
        this.nombreActividad = actividad.NombreActividad;
        this.turnoAct = actividad.Turno;
        this.horaInicio = actividad.Hora_Inicio;
        this.horaFin = actividad.Hora_Fin;
        this.descripcion = actividad.Descripcion;
        this.cupo = actividad.Cupo;
      });
  }
}
