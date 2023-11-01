import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarDatosPorfesoresComponent } from './actualizar-datos-porfesores.component';

describe('ActualizarDatosPorfesoresComponent', () => {
  let component: ActualizarDatosPorfesoresComponent;
  let fixture: ComponentFixture<ActualizarDatosPorfesoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarDatosPorfesoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarDatosPorfesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
