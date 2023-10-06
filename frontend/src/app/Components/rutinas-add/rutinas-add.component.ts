import { Component, OnInit } from '@angular/core';
import { RutinasService } from '../../Services/rutinas.service';

@Component({
  selector: 'app-rutinas-add',
  templateUrl: './rutinas-add.component.html',
  styleUrls: ['./rutinas-add.component.css'],
})
export class RutinasAddComponent implements OnInit {
  actividades: any[] = [];

  constructor(private rutinasService: RutinasService) {}

  ngOnInit(): void {
    this.GetActividades();
  }

  GetActividades() {
    this.rutinasService.getAllActividades().subscribe((data: any) => {
      this.actividades = data;
    });
  }
}
