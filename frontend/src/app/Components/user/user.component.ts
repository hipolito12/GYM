import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(private service: UserService) {
    this.ListarActividades();
  }
  aux: any;
  Actividades: any;
  public nombre: string = localStorage.getItem('nombre')!;
  dataSource: any;

  @ViewChild(MatPaginator) paginatior!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {}
  displayedColumns: string[] = [
    'NombreActividad',
    'Turno',
    'Hora_Inicio',
    'Hora_Fin',
  
  
  ];
  displayedColumns2: string[] = [
   
     'ActividadId'
  
  
  ];

  async editcustomer(id:any){
      console.log(id)

     await this.service.DetalleActividad(localStorage.getItem('token'),id).subscribe(
        (res)=>{
          Swal.fire({
          title: `Conoce mas de la actividad de ${res.NombreActividad} `,
          backdrop: true,
          html: `<p class='text-center'>${res.Descripcion}</p>`,
          icon: 'question',
          confirmButtonText: 'Aceptar'
        })}
        ,
        (err)=>{}
      )
    
  }
 
  ListarActividades() {
    this.service.ListarActividades(localStorage.getItem('token')).subscribe(
      (res) => {
        // let pepe: any = [{NombreActividad:"Boxeo",Turno:"tarde",Hora_Inicio:"14:00",Hora_Fin:"16:00"}]

        this.aux = transformarArreglo(res);
        console.log(this.aux);
        this.dataSource = new MatTableDataSource(this.aux);
        this.dataSource.paginator = this.paginatior;
        this.dataSource.sort = this.sort;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }
}
//TODO  estudiar que **** hace esto (lo saque de reddit y lo modifique)
type Actividad = {
  NombreActividad: string;
  Turno: string;
  Hora_Inicio: string;
  Hora_Fin: string;
  ActividadId: number;
};

type Persona = {
  NombreCompleto: string;
};

type Entrada = {
  actividad: Actividad;
  persona: Persona;
};

function transformarArreglo(arreglo: Entrada[]): Actividad[] {
  return arreglo.map((entrada) => entrada.actividad);
}

