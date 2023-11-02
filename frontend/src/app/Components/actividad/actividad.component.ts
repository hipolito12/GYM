import {
  Component,
  OnInit,
  Injectable,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActividadService } from '../../Services/actividad.service';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

interface actividad {
  idActividad: number;
  NombreActividad: string;
  turno: string;
  Hora_Inicio: string;
  Hora_Fin: string;
  DescripcionActividad: string;
  cupo: number;
}

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css'],
})
export class ActividadComponent implements OnInit {
  actividad: any = [];
  @ViewChild('filtroId', { static: false }) filtroId!: ElementRef;
  elementosPorPagina = 5; // Número de elementos por página
  paginaActual = 1; // Página actual

  constructor(
    private actividadService: ActividadService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.GetActiveActividades();
  }

  paginaAnterior() {
    if (this.paginaActual > 1) {
      this.paginaActual--;
    }
  }

  filtrarPorId() {
    const idFiltrado = this.filtroId.nativeElement.value;
    if (idFiltrado) {
      this.actividad = this.actividad.filter(
        (actividad1: actividad) =>
          actividad1.idActividad &&
          actividad1.idActividad.toString() === idFiltrado
      );
    } else {
      this.GetActiveActividades();
    }
  }
  paginaSiguiente() {
    const ultimoElemento = this.paginaActual * this.elementosPorPagina;
    if (ultimoElemento < this.actividad.length) {
      this.paginaActual++;
    }
  }
  cambiarElementosPorPagina() {
    this.paginaActual = 1; // Reinicia la página a 1 cuando cambia el número de elementos por página
  }

  eliminarActividad(idActividad: number) {
    const confirmar = confirm(
      '¿Estás seguro de que deseas eliminar esta rutina?'
    );

    if (confirmar) {
      // Realiza la solicitud para actualizar el campo 'activo' a 0
      this.actividadService.updateActividadActiva(idActividad, 0).subscribe(
        () => {
          console.log('Rutina eliminada con éxito');
          // Actualiza la lista de rutinas (puedes volver a llamar a GetActiveRutinas o actualizar el arreglo en memoria)
          this.GetActiveActividades();
        },
        (error) => {
          console.error('Error al eliminar la rutina', error);
        }
      );
    }
  }

  GetActiveActividades() {
    this.actividadService.getActiveActividades().subscribe((data: any) => {
      this.actividad = data;
    });
  }
  actividadSeleccionada: actividad | null = null;

  capturarActividad(idActividad: number) {
    this.router.navigate(['/actividadUpdate', idActividad]);
  }
}
