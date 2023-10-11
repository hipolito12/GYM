import {
  Component,
  OnInit,
  Injectable,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RutinasService } from '../../Services/rutinas.service';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-rutinas',
  templateUrl: './rutinas.component.html',
  styleUrls: ['./rutinas.component.css'],
})
export class RutinasComponent implements OnInit {
  rutinas: any = [];

  constructor(private rutinasService: RutinasService) {}

  ngOnInit(): void {
    this.GetGenericas();
  }
  GetGenericas() {
    this.rutinasService.getAllRutinas().subscribe((data: any) => {
      this.rutinas = data;
    });
  }
}
