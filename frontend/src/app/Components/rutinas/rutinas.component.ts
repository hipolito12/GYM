import {
  Component,
  OnInit,
  Injectable,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RutinasService } from '../../Services/rutinas.service';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

interface rutina {
  idRutinaGenerica: number;
  tiporutina: {
    idTipoRutina: number;
    NombreTipo: string;
  };
  actividad: {
    idActividad: number;
    NombreActividad: string;
  };
  DescripcionRutina: string;
  fechaActualizacion: string;
}

@Component({
  selector: 'app-rutinas',
  templateUrl: './rutinas.component.html',
  styleUrls: ['./rutinas.component.css'],
})
export class RutinasComponent implements OnInit {
  rutinas: any = [];
  @ViewChild('filtroId', { static: false }) filtroId!: ElementRef;
  elementosPorPagina = 5; // Número de elementos por página
  paginaActual = 1; // Página actual

  constructor(private rutinasService: RutinasService, private router: Router) {}

  ngOnInit(): void {
    /*     this.GetGenericas(); */
    this.GetActiveRutinas();
  }
  GetActiveRutinas() {
    this.rutinasService.getActiveRutinas().subscribe((data: any) => {
      this.rutinas = data;
    });
  }
  GetGenericas() {
    this.rutinasService.getAllRutinas().subscribe((data: any) => {
      this.rutinas = data;
    });
  }
  paginaAnterior() {
    if (this.paginaActual > 1) {
      this.paginaActual--;
    }
  }

  filtrarPorId() {
    const idFiltrado = this.filtroId.nativeElement.value;
    if (idFiltrado) {
      this.rutinas = this.rutinas.filter(
        (rutina1: rutina) =>
          rutina1.idRutinaGenerica &&
          rutina1.idRutinaGenerica.toString() === idFiltrado
      );
    } else {
      this.GetActiveRutinas();

      /*       this.GetGenericas(); */
    }
  }

  paginaSiguiente() {
    const ultimoElemento = this.paginaActual * this.elementosPorPagina;
    if (ultimoElemento < this.rutinas.length) {
      this.paginaActual++;
    }
  }
  cambiarElementosPorPagina() {
    this.paginaActual = 1; // Reinicia la página a 1 cuando cambia el número de elementos por página
  }

  rutinaSeleccionada: rutina | null = null;

  /*   capturarRutina(rutina: rutina) {
    this.rutinaSeleccionada = rutina;
  } */

  capturarRutina(idRutina: number) {
    this.router.navigate(['/rutinasUpdate', idRutina]);
  }

  eliminarRutina(idRutina: number) {
    const confirmar = confirm(
      '¿Estás seguro de que deseas eliminar esta rutina?'
    );

    if (confirmar) {
      // Realiza la solicitud para actualizar el campo 'activo' a 0
      this.rutinasService.updateRutinaActiva(idRutina, 0).subscribe(
        () => {
          console.log('Rutina eliminada con éxito');
          // Actualiza la lista de rutinas (puedes volver a llamar a GetActiveRutinas o actualizar el arreglo en memoria)
          this.GetActiveRutinas();
        },
        (error) => {
          console.error('Error al eliminar la rutina', error);
        }
      );
    }
  }
}
