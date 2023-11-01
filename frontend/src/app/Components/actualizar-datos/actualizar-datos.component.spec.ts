import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarDatosComponent } from './actualizar-datos.component';

describe('ActualizarDatosComponent', () => {
  let component: ActualizarDatosComponent;
  let fixture: ComponentFixture<ActualizarDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarDatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
