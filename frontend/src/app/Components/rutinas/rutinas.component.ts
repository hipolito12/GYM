import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RutinasService } from '../../Services/rutinas.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rutinas',
  templateUrl: './rutinas.component.html',
  styleUrls: ['./rutinas.component.css'],
})
export class RutinasComponent implements OnInit {
  rutinas: any = [];
  /* rutinas: any= [
    { label: 'Id Rutina', type: 'text', id: '' },
    { label: 'Actividad', type: 'text', id: '' },
    { label: 'Descripción', type: 'text', id: '' },
    { label: 'Fecha Actualizacion', type: 'text', id: '' }, *
    // Agrega más campos según tus necesidades
  ];*/
  constructor(private rutinasService: RutinasService) {}

  ngOnInit(): void {
    this.GetGenericas();
  }
  GetGenericas() {
    this.rutinasService.getAllRutinas().subscribe((data: any) => {
      console.log(data);
      console.log('HOLA');
      this.rutinas = data;
    });
  }
}
