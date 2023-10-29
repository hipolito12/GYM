import { ChangeDetectorRef, Component } from '@angular/core';
import { ActividadDocenteService } from '../../Services/actividad-docente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actividad-docente',
  templateUrl: './actividad-docente.component.html',
  styleUrls: ['./actividad-docente.component.css'],
})
export class ActividadDocenteComponent {
  public nombre: string = localStorage.getItem('nombre')!;
  actividad: any ;

  modificacion = {
    cupo: '',
    nombre: '',
    descripcion: '',
    horaInicio: '',
    horafin: '',
    turno: '',
    id: '',
  };
  constructor(
    private ads: ActividadDocenteService,
    private cd: ChangeDetectorRef
  ) {
    this.GetActividadDocente();
    this.modificacion.id = this.actividad.ActividadId;
  }

  async GetActividadDocente() {
    this.ads.getActividadDocente().subscribe(
      (res) => {
        this.actividad = res;
        console.log(this.actividad);
      },
      (err) => {
        console.log(err);
      }
    );
    console.log(this.actividad);
  }

  abrirModal() {
    this.modificacion.nombre = this.actividad.NombreActividad;
  }

  async Actualizar() {
    if (
      this.modificacion.descripcion === '' ||
      this.modificacion.horaInicio === '' ||
      this.modificacion.horafin === '' ||
      this.modificacion.nombre === '' ||
      this.modificacion.cupo === ''
     //|| this.seSolapa(this.modificacion.horaInicio,this.modificacion.horafin)===false
    ) {
      console.log(this.modificacion);
      this.ads.ActualizarActividad(this.modificacion).subscribe(
        (res) => {
          
          
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Actualizado correctamente'  
          })



        },
        (err) => {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'error',
            title: 'Upss... algo salio mal'
          })
        }
      );

      this.GetActividadDocente();
      this.cd.detectChanges();
    }
  }

  cambiarValorInput() {
    this.modificacion.cupo = this.actividad[0].Cupo;
    this.modificacion.descripcion = this.actividad[0].Descripcion;
    this.modificacion.horaInicio = this.actividad[0].Hora_Inicio;
    this.modificacion.horafin = this.actividad[0].Hora_Fin;
    this.modificacion.nombre = this.actividad[0].NombreActividad;
    this.modificacion.id = this.actividad[0].ActividadId;
  }


 
  
     seSolapa = (fechaInicio: string, fechaFin: string): boolean => {
      for (const horario of this.actividad.horarios) {
        const inicio = new Date(fechaInicio);
        const fin = new Date(fechaFin);
        const horarioInicio = new Date(`2000-01-01T${horario.Hora_Inicio}`);
        const horarioFin = new Date(`2000-01-01T${horario.Hora_Fin}`);
    
        if (inicio < horarioFin && fin > horarioInicio) {
          return true; // Se solapa
        }
      }
      return false; // No se solapa
    }
    
  





}

