import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit{
  public nombre: string=localStorage.getItem('nombre')!;
  constructor() { }
  ngOnInit() {
  }


}
