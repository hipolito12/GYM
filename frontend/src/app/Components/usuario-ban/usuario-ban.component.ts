import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UsuariobanService } from 'src/app/Services/usuarioban.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-usuario-ban',
  templateUrl: './usuario-ban.component.html',
  styleUrls: ['./usuario-ban.component.css']
})
export class UsuarioBanComponent  implements OnInit{
  Hablitiados!: any[];
  nombre: string = localStorage.getItem('nombre')!;
  NoHabilitados!: any[];
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  @ViewChild(MatSort) sort2 !: MatSort;

  Columnas: string[] = ['Nombre', 'Email', 'sexo', 'Telefono', 'Acciones'];
  dataSoirce: any;
  //-----------------------------------------------------------
  dataSource: any;

  constructor(private ubs: UsuariobanService,private changeDetectorRefs: ChangeDetectorRef) {
      this.llamarInhabiitados()
      this.llamarHabilitados()
  }
  ngOnInit(): void {
    this.refresh() 
  }





  Filterchange(ev: Event) {
    const value = (ev.target as HTMLInputElement).value;
    this.dataSoirce.filter = value.trim().toLocaleLowerCase();
  }

  Filterchange2(e:Event)
  {
    const value = (e.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }


  async NoPermitir(dni: number) {
    try {
      let selected = this.Hablitiados.find((x: any) => x.dni == dni);
      this.ubs.Desabilitar(selected).subscribe((data: any) => {});
        
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
            title: 'Usuario Desabilitado'
          }) 
          this.refresh() 
        
       
    }
    catch (e) { const Toast = Swal.mixin({
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
      title: 'Error en el servidor',
    })}


  }



  async Permitir(dni: number) {
    try {
      let selected = this.NoHabilitados.find((x: any) => x.dni == dni);
      this.ubs.Habilitar(selected).subscribe((data: any) => {});
       

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
            title: 'Usuario Habilitado'
          })

          this.refresh() 
    }
    catch (e) { 
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
      title: 'Error en el servidor',
    })}


  }


async llamarInhabiitados()
{
  this.ubs.Baneados().subscribe((data: any) => {
    this.NoHabilitados = data;
    this.dataSource = new MatTableDataSource<any>(this.NoHabilitados);
    this.dataSource.paginator = this.paginatior;
    this.dataSource.sort2 = this.sort2;
    this.changeDetectorRefs.detectChanges();
  },
    (error) => {
      console.log(error.message);
    })
}

async llamarHabilitados()
{
  this.ubs.Habilitados().subscribe((data: any) => {
    this.Hablitiados = data;
    this.dataSoirce = new MatTableDataSource<any>(this.Hablitiados);
    
    this.dataSoirce.paginator = this.paginatior;
    this.dataSoirce.sort = this.sort;
    this.changeDetectorRefs.detectChanges();
  },
    (error) => {
      console.log(error.message);
    })

}

refresh() 
{
  this.ubs.Habilitados().subscribe((data: any) => {
    this.Hablitiados = data;
    this.dataSoirce = new MatTableDataSource<any>(this.Hablitiados);
    
    this.dataSoirce.paginator = this.paginatior;
    this.dataSoirce.sort = this.sort;
    this.changeDetectorRefs.detectChanges();
  },
    (error) => {
      console.log(error.message);
    })

    this.ubs.Baneados().subscribe((data: any) => {
      this.NoHabilitados = data;
      this.dataSource = new MatTableDataSource<any>(this.NoHabilitados);
      this.dataSource.paginator = this.paginatior;
      this.dataSource.sort2 = this.sort2;
      this.changeDetectorRefs.detectChanges();
    },
      (error) => {
        console.log(error.message);
      })


}

}





