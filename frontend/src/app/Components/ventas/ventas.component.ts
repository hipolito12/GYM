import { Component } from '@angular/core';
import { VentasService } from '../../Services/ventas.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent {

  constructor(private ventasService:VentasService) { }
  venta=
  {
      precio:'',
      nombreDelProducto:'',
      cantidad: '', 
      
  }

  async registrar()
{
  console.log(this.venta);
  this.ventasService.registrarVenta(this.venta).subscribe(
    (res) =>{

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
        title: 'venta registrada con exito'
      })

    },
    (e)=>{

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
        title: 'Error al registrar venta,intente nuevamente'
      })

    }
  )
}

}
