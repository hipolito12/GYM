import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TipoBlogService } from 'src/app/Services/tipo-blog.service';

@Component({
  selector: 'app-tipo-blog',
  templateUrl: './tipo-blog.component.html',
  styleUrls: ['./tipo-blog.component.css'],
})
export class TipoBlogComponent {
  public nombre: string = localStorage.getItem('nombre')!;
  @ViewChild(MatPaginator) paginatior!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  tipoPost!: any;
  id:any;
  Columnas: string[] = ['Tipo',  'Acciones'];
  dataSource: any;

  tipoBlog= {
    tipo: '',
    descripcion: '',
    id: ''
  }

  constructor(
    private tp: TipoBlogService,
    private changeDetectorRefs: ChangeDetectorRef
  ){ 
  
    this.tiposPost();
    
  }


  async tiposPost() {
    
        this.tp.getTipoBlog().subscribe(
          (res) => {
            this.tipoPost = res;
            this.dataSource = new MatTableDataSource<any>(this.tipoPost);
            this.dataSource.paginator = this.paginatior;
            this.dataSource.sort = this.sort;            
            this.changeDetectorRefs.detectChanges();
          },
          (err) => {
            console.log(err);
          }
        );

      }

      crearNuevoTipoBlog(){

        this.tp.crearTiPoBlog(this.tipoBlog).subscribe(
          (res) => {
            console.log("Crear " + res);
            this.tiposPost()
            this.changeDetectorRefs.detectChanges();

          },
          (err) => {
            console.log(err.message);
          }
        );
        this.limpiar();
        this.changeDetectorRefs.detectChanges();

      

      }

      AbrirLosModales(id:any)
      {
        this.id=id;
        this.tipoBlog.id=id;
      }

      modificar(){
            this.tp. ActualizarTipoBlog(this.tipoBlog).subscribe(
          (res) => {
            console.log( "modificacion " + res);
            this.tiposPost()
            this.changeDetectorRefs.detectChanges();

           
            
          },
          (err) => {
            console.log(err.message);
          }
          
        ); 
        this.limpiar();
      }

      eliminarUno(){
        this.tp.EliminarTipoBlog(this.tipoBlog).subscribe(

          (res) => {
            console.log( "elimiar " + res);
            this.tiposPost()
            
          },
          (err) => {
            console.log(err.message);
          }

        );
      }

      elimianrTodos(){
        this.tp.DeleteallBlog(this.tipoBlog).subscribe(

          (res) => {
            console.log( "Elimiar todo " + res);
            this.tiposPost()
            
          },
          (err) => {
            console.log(err.message);
          }

        );
      }


      limpiar(){
        this.tipoBlog.tipo='';
        this.tipoBlog.descripcion='';
      }

}
