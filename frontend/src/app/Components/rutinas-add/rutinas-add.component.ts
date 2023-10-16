import { Component, OnInit } from '@angular/core';
import { RutinasService } from '../../Services/rutinas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rutinas-add',
  templateUrl: './rutinas-add.component.html',
  styleUrls: ['./rutinas-add.component.css'],
})
export class RutinasAddComponent implements OnInit {
  nroActividad: string = '';
  descripcion: string = '';
  imagenURL: string = '';
  tipoRutina: string = '';
  actividades: any[] = [];

  constructor(private rutinasService: RutinasService, private router: Router) {}

  ngOnInit(): void {
    this.GetActividades();
  }

  GetActividades() {
    this.rutinasService.getAllActividades().subscribe((data: any) => {
      this.actividades = data;
    });
  }
  postRutinas() {
    const nuevaRutina = {
      nroAct: this.nroActividad,
      descripcion: this.descripcion,
      imagen: this.imagenURL,
      tipo: this.tipoRutina,
    };

    this.rutinasService.createRutina(nuevaRutina).subscribe(
      (data: any) => {
        // Puedes manejar la respuesta aquí si es necesario
        console.log('Rutina creado exitosamente', data);

        // Redirigir al usuario a la página de visualización de roles u otra página después de crear el rol
        this.router.navigate(['/rutinas']);
      },
      (error) => {
        // Manejar errores si es necesario
        console.error('Error al crear esta rutina', error);
      }
    );
  }
}
