import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CKEditorModule } from 'ng2-ckeditor';
import { BlogService } from 'src/app/Services/blog.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-blog-crud',
  templateUrl: './blog-crud.component.html',
  styleUrls: ['./blog-crud.component.css'],
})
export class BlogCRUDComponent implements OnInit {
  blog = {
    titulo: '',
    imagen: '',
    ckeditorContent: '',
    idPost: '',
  };
  public nombre: string = localStorage.getItem('nombre')!;

  constructor(
    private bs: BlogService,
    private changeDetectorRefs: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.CargarTabla();
  }
  //------------------------------------------------------------------------------
  //Crear
  async CreateBlog() {
    if (
      this.blog.ckeditorContent != '' ||
      this.blog.imagen != '' ||
      this.blog.titulo != ''
    ) {
      this.bs.AddBlog(this.blog).subscribe(
        (res) => {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer);
              toast.addEventListener('mouseleave', Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: 'success',
            title: 'Gracias por aportar 🤗',
          });

          this.CargarTabla();
          this.changeDetectorRefs.detectChanges();
        },
        (e) => {
          console.log(e.message);

          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer);
              toast.addEventListener('mouseleave', Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: 'error',
            title: 'Error al crear el blog',
          });
        }
      );
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: 'error',
        title: 'Error al crear el blog',
      });
    }
  }

  //-----------------------------------------------------------------------------------------
  //Modificar
i={ide:''}


  @ViewChild(MatPaginator) paginatior!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatSort) sort2!: MatSort;
  blogs!: any[];
  Columnas: string[] = ['imagen', 'titulo', 'NombreCompleto', 'Acciones'];
  dataSource: any;

  async CargarTabla() {
    this.bs.getBlog().subscribe(
      (data: any) => {
        this.blogs = data;
        this.dataSource = new MatTableDataSource<any>(this.blogs);

        this.dataSource.paginator = this.paginatior;
        this.dataSource.sort = this.sort;
        this.changeDetectorRefs.detectChanges();
      },
      (error) => {
        console.log(error.message);
      }
    );
  }

  Filterchange(ev: Event) {
    const value = (ev.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

 abrirModal(id: string) {
    let selected = this.blogs.find((x: any) => x.idPost == id);
    console.log(selected);
    this.blog.titulo = selected.Titulo;
    this.blog.imagen = selected.imagen;
    this.blog.ckeditorContent = selected.Cuerpo;
    this.blog.idPost = id;
    
  }


  async Modificar() 
  {
    if (this.blog.ckeditorContent != '' || this.blog.imagen != '' || this.blog.titulo != '') {
      this.bs.UpdateBlog(this.blog).subscribe(
        (res) => {
          
          this.CargarTabla();
          this.changeDetectorRefs.detectChanges();
         
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer);
              toast.addEventListener('mouseleave', Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: 'success',
            title: 'Gracias por aportar 🤗',
          });
        },
        (error) => {
          console.log(error.message);
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer);
              toast.addEventListener('mouseleave', Swal.resumeTimer);
            },
          });
    
          Toast.fire({
            icon: 'error',
            title: 'Error Al actualizar',
          });
            
        }
      );

      this.blog.titulo = '';
      this.blog.imagen = '';
      this.blog.ckeditorContent = '';
    }
    else {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: 'error',
        title: 'Error Al actualizar',
      });
        


    }


  }

  abrirModalEliminar(id: string) {
    this.i.ide=id
  }

  async eliminar() {
    
    this.bs.DeleteBlog(this.i).subscribe(
      (res) => {
        this.CargarTabla();
          this.changeDetectorRefs.detectChanges();
          
      },
      (error) => {
        console.log(error.message);
      }
    );  
  }









}
