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

@Component({
  selector: 'app-rutinas',
  templateUrl: './rutinas.component.html',
  styleUrls: ['./rutinas.component.css'],
})
export class RutinasComponent implements OnInit {
  rutinas: any = [];
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
