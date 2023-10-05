import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisRutinasComponent } from './mis-rutinas.component';

describe('MisRutinasComponent', () => {
  let component: MisRutinasComponent;
  let fixture: ComponentFixture<MisRutinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisRutinasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisRutinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
