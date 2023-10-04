import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/Services/blog.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
  

})
export class BlogComponent implements AfterViewInit {
  blogData: any;
  TipoPost: any;
  option: any;
  p:number = 1;
  aux: any;

  constructor(private blogService: BlogService,private cpr:ChangeDetectorRef) {  this.CargarPostsYtipos();   }

  ngAfterViewInit(): void {
  
  }

  CargarPostsYtipos() {
    this.blogService.getBlog().subscribe(
      (res) => {
        this.blogData = res;
        this.cpr.markForCheck();
      },
      (err) => {
        console.log(err);
      }
    );

    this.blogService.getTipoBlog().subscribe(
      (res) => {
        this.TipoPost = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  saveOption(id: any) {
    this.option = id.value;
  }

  Filter( ) {
    this.blogService.getBlog().subscribe(
      (res) => {
        this.blogData = res;
        console.log(this.blogData);
        this.aux = this.blogData.filter((x: any) => x.TipoPostFk == Number.parseInt(this.option) );
        this.blogData = this.aux;
        this.cpr.markForCheck();
      
      },
      (err) => {
        console.log(err);
      }
    );
   
  }

  GoToPost(id: any) {
    this.aux = this.blogData.filter((x: any) => x.idPost == id );
    console.log(this.aux);
    Swal.fire({
      title:`<strong> ${this.aux[0].Titulo}</strong>`,
      icon: 'info',
      html:
        `<p style=''> ${this.aux[0].Cuerpo}</p> `
        ,
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Aceptar!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
     
      
    })
  }






  parsearFecha(fechaOriginal: string): string {
    const fecha = new Date(fechaOriginal);

    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Sumamos 1 porque los meses van de 0 a 11
    const año = fecha.getFullYear().toString();

    return `${dia}/${mes}/${año}`;
  }
}
