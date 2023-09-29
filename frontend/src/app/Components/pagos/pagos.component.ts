import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css'],
})
export class PagosComponent implements OnInit {
  token:string=localStorage.getItem('token')!
  public nombre: string = localStorage.getItem('nombre')!;
  constructor(private Pagos: UserService) {}
  ngOnInit() {this.ObtenerPago();}

  ObtenerPago() {
    this.Pagos.ProximoPago(this.token).subscribe(
      (res) => {
        console.log( JSON.stringify(res) );
      },
      (err) => {
        console.log(err.message);
      }
    );
  }

}
