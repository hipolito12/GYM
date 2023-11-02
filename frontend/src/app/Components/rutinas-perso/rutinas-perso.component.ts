import {
  Component,
  OnInit,
  Injectable,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RutinasPersoService } from 'src/app/Services/rutinas-perso.service';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

interface rutina {
  idRutinaPersonalizada: number;
  persona: {
    dni: GLfloat;
  };
  Imagenes: string;
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
  selector: 'app-rutinas-perso',
  templateUrl: './rutinas-perso.component.html',
  styleUrls: ['./rutinas-perso.component.css'],
})
export class RutinasPersoComponent implements OnInit {
  rutinas: any = [];
  @ViewChild('filtroId', { static: false }) filtroId!: ElementRef;
  elementosPorPagina = 5; // Número de elementos por página
  paginaActual = 1; // Página actual

  constructor(
    private rutinasPersoService: RutinasPersoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.GetActiveRutinasP();
  }
  GetActiveRutinasP() {
    this.rutinasPersoService.getActiveRutinasP().subscribe((data: any) => {
      this.rutinas = data;
    });
  }
  GetAll() {
    this.rutinasPersoService.getAllRutinasP().subscribe((data: any) => {
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
          rutina1.idRutinaPersonalizada &&
          rutina1.idRutinaPersonalizada.toString() === idFiltrado
      );
    } else {
      this.GetActiveRutinasP();
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

  capturarRutina(idRutina: number) {
    this.router.navigate(['/rutinasPersoUpdate', idRutina]);
  }

  eliminarRutina(idRutina: number) {
    const confirmar = confirm(
      '¿Estás seguro de que deseas eliminar esta rutina?'
    );

    if (confirmar) {
      // Realiza la solicitud para actualizar el campo 'activo' a 0
      this.rutinasPersoService.updateRutinaActivaP(idRutina, 0).subscribe(
        () => {
          console.log('Rutina eliminada con éxito');
          // Actualiza la lista de rutinas (puedes volver a llamar a GetActiveRutinas o actualizar el arreglo en memoria)
          this.GetActiveRutinasP();
        },
        (error) => {
          console.error('Error al eliminar la rutina', error);
        }
      );
    }
  }
}
