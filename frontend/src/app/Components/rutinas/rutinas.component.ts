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

/* interface rutina {
  idRutina: number;
  actividad: string;
  descripcion: string;
  tiporutina: number;
} */
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

  constructor(private rutinasService: RutinasService) {}

  ngOnInit(): void {
    this.GetGenericas();
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
      this.GetGenericas();
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
}
