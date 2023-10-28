import { Component, OnInit } from '@angular/core';
import { RutinasPersoService } from 'src/app/Services/rutinas-perso.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rutinas-perso-add',
  templateUrl: './rutinas-perso-add.component.html',
  styleUrls: ['./rutinas-perso-add.component.css'],
})
export class RutinasPersoAddComponent implements OnInit {
  nroDni: string = '';
  nroActividad: string = '';
  descripcion: string = '';
  imagenURL: string = '';
  tipoRutina: string = '';
  actividades: any[] = [];
  constructor(
    private rutinasPersoService: RutinasPersoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    /*  this.GetActividades(); */
  }
  /*   GetActividades() {
    this.rutinasPersoService.getAllActividadesP().subscribe((data: any) => {
      this.actividades = data;
    });
  } */
  postRutinasP() {
    // Verifica si el DNI existe en la base de datos
    this.rutinasPersoService.checkDniExist(this.nroDni).subscribe(
      (data: any) => {
        if (data.exists) {
          // El DNI existe, puedes crear la rutina personalizada
          const nuevaRutina = {
            dni: this.nroDni,
            nroAct: this.nroActividad,
            descripcion: this.descripcion,
            imagen: this.imagenURL,
            tipo: this.tipoRutina,
            fechaAct: new Date().toISOString().split('T')[0],
          };

          this.rutinasPersoService.CreateRutinasP(nuevaRutina).subscribe(
            (data: any) => {
              console.log('Rutina creada exitosamente', data);
              this.router.navigate(['/rutinasPerso']);
            },
            (error) => {
              console.error('Error al crear esta rutina', error);
            }
          );
        } else {
          // El DNI no existe, muestra un mensaje de error
          alert('El DNI ingresado no es válido. Debe ingresar un DNI válido.');
        }
      },
      (error) => {
        console.error('Error al verificar el DNI', error);
      }
    );
  }
}
