import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css'],
})
export class PagosComponent implements OnInit {
  precio: number = 0;
  fecha: string = '';
  token: string = localStorage.getItem('token')!;
  public nombre: string = localStorage.getItem('nombre')!;
  constructor(private Pagos: UserService) {}
  ngOnInit() {
    this.ObtenerPago();
  }

  ObtenerPago() {
    this.Pagos.ProximoPago(this.token).subscribe(
      (res) => {
        console.log(res.respuesta);
        this.precio = res.respuesta.preciocuota.valor || 0;
        this.fecha =
          res.respuesta.FechaPago === undefined
            ? 'realiza el primerpago  para empezar el seguimiento'
            : this.formatearFecha(this.sumarMes(res.respuesta.FechaPago));
      },
      (err) => {
        console.log(err.message);
      }
    );
  }

  sumarMes(fechas: Date): Date {
    const fechaNueva = new Date(fechas);

    const mes = fechaNueva.getMonth();
    fechaNueva.setMonth(mes + 1);

    return fechaNueva;
  }

  formatearFecha(fecha: Date): string {
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const anio = fecha.getFullYear();

    const diaStr = dia < 10 ? `0${dia}` : `${dia}`;
    const mesStr = mes < 10 ? `0${mes}` : `${mes}`;

    return `${diaStr}/${mesStr}/${anio}`;
  }

  mesSiguiente(fecha: Date): Date {
    const mesSiguiente = new Date(fecha);
    mesSiguiente.setMonth(mesSiguiente.getMonth() + 1);
    return mesSiguiente;
  }
}
