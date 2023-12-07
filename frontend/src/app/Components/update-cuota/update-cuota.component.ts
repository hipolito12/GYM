import { Component, OnInit } from '@angular/core';
import { CuotaService } from '../../Services/cuota.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Alerts } from 'Alerts';
@Component({
  selector: 'app-update-cuota',
  templateUrl: './update-cuota.component.html',
  styleUrls: ['./update-cuota.component.css'],
})
export class UpdateCuotaComponent implements OnInit {
  constructor(private cuota: CuotaService) {}
  ValorCuota: Number = 0;
  NuevoValorCuota= {valor:0};
  ngOnInit(): void {
    this.GetCuota();
  }

  async GetCuota() {
    this.cuota.getCuota().subscribe({
      next: (data) => {
        this.ValorCuota = data;
      },
      error: (error) => {
        console.error('Ups! ocurrio un error', error);
      },
    });
  }

  async UpdateCuota(valor: any) {
    this.cuota.UpdateCuota(valor).subscribe({
      error: () => {Alerts('error', 'Error', 'No se pudo actualizar el valor de la cuota');},
    });
  }

  mostrarInput() {
    Swal.fire({
      title: 'Ingrese un valor',
      input: 'text',
      inputPlaceholder: 'Ingrese su texto aquí',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar',
      allowOutsideClick: false,
    }).then((result) => {
      ;
      if (result.isConfirmed && this.validarNumero(Number.parseFloat(result.value))) {
        this.NuevoValorCuota.valor = result.value;
        this.UpdateCuota(this.NuevoValorCuota);
        this.ValorCuota = result.value;
        Alerts('success', 'Valor actualizado correctamente',`El proximo mes los clientes pagaran el nuevo monto `);
      }
      else{
        Alerts('error', 'El valor ingresado no es valido','ingrese valor valido');
        console.log(this.ValorCuota);
      }
    });
  }

  validarNumero(valor: any) {
    if (valor > 0 && !isNaN(valor) && Number.isFinite(valor)) {
      return true;
    } else {
      return false;
    }
  }
}
