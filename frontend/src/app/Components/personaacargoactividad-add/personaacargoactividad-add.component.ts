import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { personaacargoactividadService } from '../../Services/personaacargoactividad.service';

@Component({
  selector: 'app-personaacargoactividad-add',
  templateUrl: './personaacargoactividad-add.component.html',
  styleUrls: ['./personaacargoactividad-add.component.css'],
})
export class personaacargoactividadAddComponent implements OnInit {
  DniPersonaAcargo: number = 0;
  idActividadFk: number = 0;

  constructor(
    private personaacargoactividadService: personaacargoactividadService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  postPersonasAcargoActividad() {
    const nuevaPersonaAcargo = {
      dni: this.DniPersonaAcargo,
      idactividad: this.idActividadFk,
    };

    this.personaacargoactividadService.createPersonaAcargo(nuevaPersonaAcargo).subscribe(
      (data: any) => {
        // Se puede manejar la respuesta aquí si es necesario
        console.log('Persona a cargo de la actividad creada exitosamente', data);

        // Redirigir al usuario a la página de visualización de las personas a cargo u otra página después de crear la persona a cargo de la actividad
        this.router.navigate(['/personaacargoactividad']);
      },
      (error) => {
        // Manejar errores si es necesario
        console.error('Error al crear esta persona a cargo de la actividad', error);
      }
    );
  }
}
