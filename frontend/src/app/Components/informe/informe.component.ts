import { Component, OnInit, ViewChild ,ChangeDetectorRef} from '@angular/core';
import { InformeService } from '../../Services/informe.service';
import { Alerts } from '../../../../Alerts';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
@Component({
  selector: 'app-informe',
  templateUrl: './informe.component.html',
  styleUrls: ['./informe.component.css'],
})
export class InformeComponent implements OnInit {

  selectedDate: Date| null = null;
  selectedDateCuota: Date| null = null;
  constructor(private informe: InformeService,private cdr:ChangeDetectorRef) {}
  nombre = localStorage.getItem('nombre');

  ngOnInit(): void {
    this.DatosInforme();
  }
  public gananciaCuota!: number;
  public gananciaVenta!: number;
  
  public informes!: any;
  public DataSourceVentas: any 
  public DataSourceCuotas: any 
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  public ColumnasVenta: string[] = ['Trabajador','producto','Fecha','Precio','Cantidad'];
  public ColumnasCuota: string[] = ['Cliente','Fecha','Precio'];

  async DatosInforme(): Promise<void> {

    this.informe.GetInforme().subscribe({

      next: (res: any) => {
        this.informes = res;  
      },

      error: (err: any) => {
        console.log(err);
        Alerts('error', 'Error', 'No se pudo obtener los datos del informe');
      },
      complete: () => {
        this.CargaTablaVenta();
        this.CargaTablaCuota();
        this.calcularGananciaVenta();
        //this.calcularGananciaCuota();
      },
    });
  }

  async CargaTablaVenta():Promise<void> {
    this.DataSourceVentas = new MatTableDataSource<any>(this.informes.ventas);
    this.DataSourceVentas.paginator = this.paginatior;
    this.DataSourceVentas.sort = this.sort;
    this.selectedDate = null
  }
  async CargaTablaCuota():Promise<void> {
    this.DataSourceCuotas = new MatTableDataSource<any>(this.informes.cuotas);
    this.DataSourceCuotas.paginator = this.paginatior;
    this.DataSourceCuotas.sort = this.sort;
    this.selectedDateCuota = null
  }
  

  onDateChange(event: any) {
    this.selectedDate = event.value;
    let aux = this.informes.ventas.filter((x: any) => this.formatearFecha(x.FechaVenta) == this.formatearFecha(this.selectedDate?.toISOString()!));
    this.DataSourceVentas = new MatTableDataSource<any>(aux);
    this.cdr.detectChanges();


  }

  onDateChange2(event:any)
  {
    this.selectedDateCuota = event.value;
    let aux= this.informes.cuotas.filter((x: any) => this.formatearFecha(x.FechaPago) == this.formatearFecha(this.selectedDateCuota?.toISOString()!));
    this.DataSourceCuotas = new MatTableDataSource<any>(aux);
    this.cdr.detectChanges();

  }
  
calcularGananciaVenta():number{
  this.gananciaVenta = 0;
  this.informes.ventas.forEach((element: any) => {
    this.gananciaVenta += element.precio 
    console.log(this.gananciaVenta);
  
  });
  return this.gananciaVenta;
}


calcularGananciaVentaEnFecha(fechaAbuscar:any):number{

  this.gananciaVenta = 0;
  this.informes.ventas.forEach((element: any) => {
    if(this.formatearFecha(element.FechaVenta) == this.formatearFecha(fechaAbuscar?.toISOString()!)){
      this.gananciaVenta += element.precio 
    }
  });
  return this.gananciaVenta;
}

calcularGananciaCuotaEnFecha(fechaAbuscar: any):number {

  this.gananciaCuota = 0;
  this.informes.cuotas.forEach((element: any) => {
    if(this.formatearFecha(element.FechaPago) == this.formatearFecha(fechaAbuscar?.toISOString()!)){
      this.gananciaCuota += element.preciocuota.valor;
    }
  });
  return this.gananciaCuota;

  }

calcularGananciaCuota():number{
  this.gananciaCuota = 0;
  this.informes.cuotas.forEach((element: any) => {
    this.gananciaCuota += element.preciocuota.valor;
  });
  return this.gananciaCuota;
}

 formatearFecha(fechaISO: any): string {
    const fecha = new Date(fechaISO);

    const año = fecha.getFullYear();
    const mes = ("0" + (fecha.getMonth() + 1)).slice(-2); // Agregar cero a los meses < 10
    const dia = ("0" + fecha.getDate()).slice(-2); // Agregar cero a los días < 10
  
    const fechaFormateada = `${año}/${mes}/${dia}`;
  
    return fechaFormateada;
  }

 
}
