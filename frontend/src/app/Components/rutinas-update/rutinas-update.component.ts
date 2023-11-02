import { Component, OnInit } from '@angular/core';
import { RutinasService } from '../../Services/rutinas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rutinas-update',
  templateUrl: './rutinas-update.component.html',
  styleUrls: ['./rutinas-update.component.css'],
})
export class RutinasUpdateComponent {
  idRutina: number = 0;
  pageTitle: string = '';

  nroActividad: string = '';
  descripcion: string = '';
  imagenURL: string = '';
  tipoRutina: string = '';
  actividades: any[] = [];

  constructor(
    private rutinasService: RutinasService,
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
  UpdateRutinas1() {
    const rutinaActualizada = {
      id: this.idRutina,
      nroAct: this.nroActividad,
      descripcion: this.descripcion,
      imagen: this.imagenURL,
      tipo: this.tipoRutina,
      fechaAct: new Date().toISOString().split('T')[0],
    };
    this.rutinasService
      .updateRutina(this.idRutina, rutinaActualizada)
      .subscribe(
        (data: any) => {
          console.log('Rutina editada exitosamente', data);

          this.router.navigate(['/rutinas']);
        },
        (error) => {
          console.error('Error al editar esta rutina', error);
        }
      );
  }

  cargarRutina(idRutina: number) {
    this.rutinasService.GetRutinaById(idRutina).subscribe((rutina: any) => {
      this.nroActividad = rutina.actividad.ActividadId;
      this.descripcion = rutina.DescripcionRutina;
      this.imagenURL = rutina.Imagenes;
      this.tipoRutina = rutina.tiporutina.idTipoRutina;
    });
  }
}
