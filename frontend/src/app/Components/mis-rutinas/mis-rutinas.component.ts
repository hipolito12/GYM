import { Component } from '@angular/core';
import { MisRutinasService } from 'src/app/Services/mis-rutinas.service';

@Component({
  selector: 'app-mis-rutinas',
  templateUrl: './mis-rutinas.component.html',
  styleUrls: ['./mis-rutinas.component.css'],
  providers: [MisRutinasService]
})
export class MisRutinasComponent  {
  public nombre: string = localStorage.getItem('nombre')!;
  public RutinasGenericas: any ;
  public RutinasPersonalizadas: any ;
  constructor(private misrutinas: MisRutinasService) 
  {
    this.GetGenericas();
  }

      GetGenericas()
      {
        this.misrutinas.GetRutinasGenericas().subscribe(
      (data:any)=>
        {
          this.RutinasGenericas = data;

         
        }
        ,
        (error)=>{ console.log(error);}
        )


        this.misrutinas.GetRutinasPersonalizadas(localStorage.getItem('token')!).subscribe(
          (res)=>{
            this.RutinasPersonalizadas=res
            console.log(this.RutinasPersonalizadas);
          },
          (err)=>{}
        )



      }


       separarPorLineas(input: string): string[] {
        let arreglo = input.split('\n');
        return arreglo;
    }


    }

