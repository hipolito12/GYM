import { Component, OnInit } from '@angular/core';
import { RutinasService } from '../../Services/rutinas.service';
import { Router } from '@angular/router';
import { ActividadService } from 'src/app/Services/actividad.service';

@Component({
  selector: 'app-actividad-add',
  templateUrl: './actividad-add.component.html',
  styleUrls: ['./actividad-add.component.css'],
})
export class ActividadAddComponent implements OnInit {
  nombreActividad: string = '';
  turnoAct: string = '';
  horaInicio: string = '';
  horaFin: string = '';
  descripcion: string = '';
  cupo: number = 0;

  constructor(
    private actividadService: ActividadService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  postActividades() {
    const nuevaActividad = {
      nombre: this.nombreActividad,
      turno: this.turnoAct,
      horaI: this.horaInicio,
      horaF: this.horaFin,
      descrip: this.descripcion,
      cup: this.cupo,
    };

    this.actividadService.createActividad(nuevaActividad).subscribe(
      (data: any) => {
        // Puedes manejar la respuesta aquí si es necesario
        console.log('Rutina creado exitosamente', data);

        // Redirigir al usuario a la página de visualización de roles u otra página después de crear el rol
        this.router.navigate(['/actividad']);
      },
      (error) => {
        // Manejar errores si es necesario
        console.error('Error al crear esta rutina', error);
      }
    );
  }
}
