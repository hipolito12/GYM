import { Component } from '@angular/core';
import { PagoCuotaService } from 'src/app/Services/pago-cuota.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css'],
})
export class ProfesoresComponent {
  public nombre: string = localStorage.getItem('nombre')!;

  pago = {
    dni: '',
  };
  constructor(private pc:PagoCuotaService) {}

  async RealizarPago(): Promise<void> {
      if(this.pago.dni==='')
      {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          title: 'Ingrese un DNI',
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        
        Toast.fire({
          icon: 'error',
          title: 'Ingrese un dni no vacio'
        })
        return;
      }

      else
      {
        try 
        {
          this.pc.DatosPago(this.pago).subscribe(
            (res)=>{
              
              const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                  confirmButton: 'btn btn-success',
                  cancelButton: 'btn btn-danger'
                },
                buttonsStyling: false
              })
              
              swalWithBootstrapButtons.fire({
                title: '¿Queres realizar elpago?',
                html:`Nombre Usuario: <strong>${res.resultado.NombreCompleto}</strong> </br>
                      Sexo: <strong>${res.resultado.sexo}</strong> </br>
                      Valor de Cuota: <strong>${res.resultado.valorcuota}</strong>`,
      
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Pagar',
                cancelButtonText: 'Cancelar',
                reverseButtons: true
              }).then((result) => {
                if (result.isConfirmed) {
                  
                  this.pc.RegistrarPago(this.pago).subscribe(
                    (res)=>
                    { 
                      const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        title: 'Pago realizado con exito',
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                          toast.addEventListener('mouseenter', Swal.stopTimer)
                          toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                      })
                      
                      Toast.fire({
                        icon: 'success',
                        title: 'Signed in successfully'
                      })
    
                    }
    
                  )
                 
                } else if (
                 
                  result.dismiss === Swal.DismissReason.cancel
                ) {
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
                    title: 'Pago no realizado'
                  })
                }
              })
            
            
            },
            (e)=>{console.log(e.message)}
          )
                  
        }
        catch(e){}
    
      }
   
   
  }

}
