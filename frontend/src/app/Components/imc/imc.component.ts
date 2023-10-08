import { Component } from '@angular/core';
import { ImcService } from 'src/app/Services/imc.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class IMCComponent {
IMC=
{
    altura:'',
    peso:'',
    edad: '', 
    
}
imc:any
bmr:any
bfp:any
sexo:string='';

  constructor(private imcservice: ImcService) {  this.imcservice.GetSexo(localStorage.getItem('token')!)
  .subscribe((data:any)=>{data='femenino'?this.sexo='female':this.sexo='male'},
  (error:any)=>{console.log(error.message)}) }
   

  async CalcularIMC()
  { 
     this.imcservice.cobinarLlmadosApi(Number.parseInt(this.IMC.altura),Number.parseInt( this.IMC.peso), Number.parseInt(this.IMC.edad), this.sexo)
     .subscribe(
      (data:any)=>{
      Swal.fire({
        icon: 'info',
        title: 'Informe de sus salud',
        html:` Indice de masa Corporal :<strong> ${data[0].info.bmi} </strong> </br>
               su salud segun estos datos:<strong> ${data[0].info.health}</strong> 
               <p>su metabolismo basal es de: <strong>${data[1].info.bmr} </strong> </p>
               <p>su porcentaje de grasa corporal es de: <strong>${data[3].info.bfp} </strong> </p>
               <p>su peso ideal es de: <strong>${data[2].info.devine}(Indide de devine) </strong> </p>
               `,
        footer: '<a href="#">Para asesoria de nuestros profecionales</a>'
        
      })
  
      
      
      
      },
     (error:any)=>{console.log(error.message)
    
    
      Swal.fire(
        'Error en el servidor',
        'si persiste comunicare al 0800-0800-0800-0800',
        'error'
      )
    
    
    
    
    
    })
    
  
      
    
  }

}



