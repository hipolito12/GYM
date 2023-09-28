import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importa HttpClient para hacer solicitudes HTTP

@Component({
  selector: 'app-rutinas',
  templateUrl: './rutinas.component.html',
  styleUrls: ['./rutinas.component.css']
})
export class RutinasComponent {
  // Variable para controlar la visibilidad del formulario
  mostrarForm = false;

  // Variable para almacenar la selección del tipo de rutina
  tipoRutina: string | undefined;

  // Variables para almacenar los datos del formulario
  IdActividadesfk: number | undefined;
  DescripcionRutina: string = '';
  imagenes: string | undefined;

  constructor(private httpClient: HttpClient) {} // Inyecta HttpClient en el constructor

  // Función para mostrar u ocultar el formulario
  mostrarFormulario() {
    this.mostrarForm = !this.mostrarForm;
  }

  // Función para guardar una rutina personalizada
  guardarRutinaPersonalizada() {
    const rutinaPersonalizadaData = {
      IdActividadesfk: this.IdActividadesfk,
      TipoRutinafk: 1, // Reemplaza con el ID del tipo de rutina correspondiente
      PersonaIdFK: 123, // Reemplaza con el DNI de la persona correspondiente
      DescripcionRutina: this.DescripcionRutina,
      imagenes: this.imagenes,
    };

    this.httpClient.post('/guardar-rutina-personalizada', rutinaPersonalizadaData).subscribe(
      (response) => {
        console.log('Rutina personalizada guardada con éxito', response);
        // Realiza cualquier acción adicional necesaria después de guardar
      },
      (error) => {
        console.error('Error al guardar la rutina personalizada', error);
        // Maneja errores aquí
      }
    );
  }
}
