import { Component,OnInit ,ChangeDetectorRef, ViewChild} from '@angular/core';
import { TipoRutinasService } from '../../Services/tipo-rutinas.service';
import {TipoRutina} from '../../../../models/Types';
import { Alerts } from 'Alerts';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-tipo-rutina',
  templateUrl: './tipo-rutina.component.html',
  styleUrls: ['./tipo-rutina.component.css']
})
export class TipoRutinaComponent implements OnInit {
 private id:number = 0;
  element:TipoRutina = {
    idTipoRutina:null,
    NombreTipo:null,
    visible:null
  };
descripcion:string = '';
  public TiposRutinas:TipoRutina[] = [];
  public Columnas:string[] = ['NombreTipo','Acciones'];
  @ViewChild(MatPaginator) paginatior!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource: any;
  constructor(private ts:TipoRutinasService,private cd: ChangeDetectorRef) 
  { }
  Object!:TipoRutina ;
  ngOnInit(): void {
    this.LoadTipoRutinas()
  }
//TODO: cargar tablas
  async LoadTipoRutinas()
  {
    const data = await this.ts.getTipoRutinas().subscribe({
      next: (data:any) => {
        this.TiposRutinas = data;
        this.dataSource = new MatTableDataSource<any>(this.TiposRutinas);
        this.dataSource.paginator = this.paginatior;
        this.dataSource.sort = this.sort;            
      },
      error: (error:any) => {
        console.log(error);
      },
      complete: () => { 
        this.cd.detectChanges();
      }

    })
  }

  async DeleteTipoRutina()
  {
    this.ts.DeleteTipoRutina(this.element).subscribe({
    
      error: (error:any) => {
        console.log(error);
        Alerts('error','Error','No se ha podido eliminar el tipo rutina')
      },
      complete: () => { 
        Alerts('success','Tipo Rutina Eliminada','Se ha eliminado el tipo rutina correctamente')
        this.LoadTipoRutinas();}

    })
  }

  async UpdateTipoRutina()
  {

    const data = await this.ts.UpdateTipoRutina(this.element).subscribe({
    
      error: (error:any) => {
        Alerts('error','Error','No se ha podido actualiar el tipo rutina')
      },
      complete: () => { 
        Alerts('success','Tipo Rutina Actualizada','Se ha actualizado el tipo rutina correctamente')
        this.LoadTipoRutinas();
        
      }

    })
  }
  async CreateTipoRutina()
  {
    this.ts.createTipoRutina(this.element).subscribe({
    
      error: (error:any) => {
        Alerts('error','Error','No se ha podido Crear el tipo rutina')
      },
      complete: () => { 
        Alerts('success','Tipo Rutina Creada','Se ha creado el tipo rutina correctamente')
        this.LoadTipoRutinas();
        
      }

    })
  }

  AbrirLosModales(id: any) {
    this.id = id;
    this.element = this.TiposRutinas.find((m) => {return m.idTipoRutina == id})!;
    console.log(this.element);
  }

  limpiar(){
    this.element.NombreTipo = '';
  this.descripcion = '';
  }

}
