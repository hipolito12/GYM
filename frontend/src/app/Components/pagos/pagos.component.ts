import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css'],
})
export class PagosComponent implements OnInit {
  public nombre: string = localStorage.getItem('nombre')!;
  constructor(private Pagos: UserService) {}
  ngOnInit() {}

  ObtenerPago() {
    this.Pagos.ProximoPago(localStorage.getItem('token')!).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
