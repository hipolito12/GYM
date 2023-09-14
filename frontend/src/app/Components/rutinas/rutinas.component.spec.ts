import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinasComponent } from './rutinas.component';

describe('RutinasComponent', () => {
  let component: RutinasComponent;
  let fixture: ComponentFixture<RutinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutinasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
