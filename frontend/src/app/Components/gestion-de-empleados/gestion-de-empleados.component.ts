import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { GestionDeEmpleadosService } from '../../Services/gestion-de-empleados.service'
import { Rol } from '../../../../models/Types'
import { Alerts } from 'Alerts';
import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-gestion-de-empleados',
  templateUrl: './gestion-de-empleados.component.html',
  styleUrls: ['./gestion-de-empleados.component.css']
})
export class GestionDeEmpleadosComponent implements OnInit {
  roles: Rol[] = [];
  empleados: any[] = [];
  id: Number = 0;
  empleado = {
    dni: null,
    IdRolfk: null,
    RutinasFK: null,
    email: null,
    password: null,
    NombreCompleto: null,
    sexo: null,
    telefono: null,
    direccion: null,
    estado: null,
  }
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  Columnas: string[] = ['DNI', 'password', 'nombreCompleto', 'telefono', 'email', 'rol', 'Acciones'];
  dataSource: any;
  constructor(private changeDetectorRefs: ChangeDetectorRef, private ge: GestionDeEmpleadosService) { }

  ngOnInit(): void {
    this.CargarEmpleados();
    this.obtenerRoles();
  }

  async CargarEmpleados() {
    this.ge.getEmpleados().subscribe({
      next: (data: any) => {
        this.empleados = data;
        this.dataSource = new MatTableDataSource<any>(this.empleados);
        this.dataSource.paginator = this.paginatior;
        this.dataSource.sort = this.sort;
        
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        this.changeDetectorRefs.detectChanges();
      },
    })
  }


  async EliminarEmpleado() {
    this.ge.DeleteEmpleado(this.empleado).subscribe({

      error: (error: any) => {
        console.log(error);
        Alerts('error', 'Error al eliminar empleado', 'Error')
      },
      complete: () => {
        Alerts('success', 'Empleado eliminado correctamente', 'Exito')
        this.CargarEmpleados()
      },
    })
  }

  async ActualizarEmpleado() {


    if (this.validacion(this.empleado)) {
      this.ge.UpdateEmpleado(this.empleado).subscribe({

        error: (error: any) => {
          console.log(error);
          Alerts('error', 'Error al actualizar empleado', 'Error')
        },
        complete: () => {
          Alerts('success', 'Empleado actualizado correctamente', 'Exito')
          this.CargarEmpleados()
        },
      })
    }
  }

  async AgregarEmpleado() {
    this.ge.AddEmpleado(this.empleado).subscribe({

      error: (error: any) => {
        console.log(error);
        Alerts('error', 'Error al agregar empleado', 'Error')
      },
      complete: () => {
        Alerts('success', 'Empleado agregado correctamente', 'Exito')
        this.CargarEmpleados()
      },
    })
  }

  async EliminarActividadesEmpleado() {
    this.ge.DeleteEmpleadoEnActividad(this.empleado).subscribe({

      error: (error: any) => {
        console.log(error);
        Alerts('error', 'Error al eliminar actividades de empleado', 'Error')
      },
      complete: () => {
        Alerts('success', 'Actividades de empleado eliminadas correctamente', 'Exito')
        this.CargarEmpleados()
      },
    })
  }


  abrirModal(id: Number) {
    this.id = id;
    this.empleado = this.empleados.find(x => x.dni === id);
  }

  async obtenerRoles() {
    this.ge.getroles().subscribe({
      next: (data: any) => {
        this.roles = data;
      },
      error: (error: any) => {
        console.log(error);
      },
    })
  }

  Filterchange($event: Event) {
    const value = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  validacion(empleado: any) {
    if (
      empleado.dni === '' ||
      empleado.IdRolfk === '' ||
      empleado.RutinasFK === '' ||
      empleado.email === '' ||
      empleado.password === '' ||
      empleado.NombreCompleto === '' ||
      empleado.sexo === '' ||
      empleado.telefono === '' ||
      empleado.direccion === '' ||
      empleado.estado === ''
    ) {
      Alerts('error', 'Debe llenar todos los campos', 'Error');
      return false;
    } else {
      return true;
    }
  }
}



