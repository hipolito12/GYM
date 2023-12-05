import {
  Component,
  OnInit,
  Injectable,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { personaacargoactividadService } from '../../Services/personaacargoactividad.service';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PersonaACargoActividad } from 'models/Types.js';

interface personaacargoactividad {
  DniPersonaAcargo: number;
  IdActividadFk: number;
}

@Component({
  selector: 'app-personaacargoactividadactividad',
  templateUrl: './personaacargoactividad.component.html',
  styleUrls: ['./personaacargoactividad.component.css'],
})
export class personaacargoactividadComponent implements OnInit {
  listPersonasacargoactividad: PersonaACargoActividad[] = [];
  //nombre:string = localStorage.getItem('nombre')!;

  @ViewChild('filtroId', { static: false }) filtroId!: ElementRef;
  elementosPorPagina = 5; // Número de elementos por página
  paginaActual = 1; // Página actual
  constructor(
    private personaacargoactividadService: personaacargoactividadService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.GetAllPersonasACargo();
  }

  paginaAnterior() {
    if (this.paginaActual > 1) {
      this.paginaActual--;
    }
  }

  filtrarPorId() {
    const idFiltrado = this.filtroId.nativeElement.value;
    if (idFiltrado) {
      const listaFiltrada = this.listPersonasacargoactividad.filter(
        (persona) =>
          persona.DniPersonaAcargo &&
          persona.DniPersonaAcargo.toString() === idFiltrado
      );
      this.listPersonasacargoactividad = listaFiltrada;
    } else {
      this.GetAllPersonasACargo();
    }
  }
  paginaSiguiente() {
    const ultimoElemento = this.paginaActual * this.elementosPorPagina;
    if (ultimoElemento < this.listPersonasacargoactividad.length) {
      this.paginaActual++;
    }
  }
  cambiarElementosPorPagina() {
    this.paginaActual = 1; // Reinicia la página a 1 cuando cambia el número de elementos por página
  }

  eliminarPersonaAcargoactividad(DniPersonaAcargo: number | null) {
    
    if (DniPersonaAcargo !== null){
      const confirmar = confirm(
        '¿Estás seguro de que deseas eliminar esta persona a cargo de la actividad?'
      );
  
      if (confirmar) {
        // Realiza la solicitud para actualizar el campo 'activo' a 0
        this.personaacargoactividadService.eliminarPersonaAcargoactividad(DniPersonaAcargo).subscribe(
          () => {
            console.log('Persona a cargo de la actividad eliminada con éxito');
            // Actualiza la lista de de las personas a cargo de actividades (se puede volver a llamar a GetAllPersonasACargo o actualizar el arreglo en memoria)
            this.GetAllPersonasACargo();
          },
          (error) => {
            console.error('Error al eliminar la persona a cargo de la actividad', error);
          }
        );
      }
    } else {
      console.log('El DNI de la persona es null');
    }
  }


  GetAllPersonasACargo() {
    this.personaacargoactividadService.getPersonasACargo().subscribe((data: personaacargoactividad[]) => {
      this.listPersonasacargoactividad = data;
    });
  }
  personaacargoactividadSeleccionada: personaacargoactividad | null = null;

  capturarPersonaACargoActividad(DniPersonaAcargo: number) {
    this.router.navigate(['/personaacargoactividadUpdate', DniPersonaAcargo]);
  }
}
