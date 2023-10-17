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
  fechaActual = new Date();
  fechaHoy =
    this.fechaActual.getFullYear() +
    '-' +
    (this.fechaActual.getMonth() + 1) +
    '-' +
    this.fechaActual.getDay();

  constructor(
    private rutinasService: RutinasService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idRutina = params.get('id');
      if (idRutina) {
        this.idRutina = +idRutina; // Convierte el ID en un número (si es necesario)
        this.pageTitle = `Editar Rutina #${this.idRutina}`; // Actualiza el título de la página
        this.cargarRutina(this.idRutina.toString());
      }
    });
  }
  UpdateRutinas() {
    const nuevaRutina = {
      nroAct: this.nroActividad,
      descripcion: this.descripcion,
      imagen: this.imagenURL,
      tipo: this.tipoRutina,
      fechaAct: this.fechaHoy,
    };

    this.rutinasService.updateRutina(nuevaRutina).subscribe(
      (data: any) => {
        console.log('Rutina editada exitosamente', data);
        this.router.navigate(['/rutinas']);
      },
      (error) => {
        console.error('Error al editar esta rutina', error);
      }
    );
  }
  cargarRutina(idRutina: string) {
    /*     this.rutinasService.obtenerRutinaPorId(idRutina).subscribe((rutina: any) => {
        // Asigna la información de la rutina a las propiedades del formulario
        this.nroActividad = rutina.nroActividad;
        this.descripcion = rutina.descripcion;
        this.imagenURL = rutina.imagenURL;
        this.tipoRutina = rutina.tipoRutina;
      }); */
  }
}
