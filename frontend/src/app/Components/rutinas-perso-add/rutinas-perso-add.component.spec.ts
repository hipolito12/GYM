import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinasPersoAddComponent } from './rutinas-perso-add.component';

describe('RutinasPersoAddComponent', () => {
  let component: RutinasPersoAddComponent;
  let fixture: ComponentFixture<RutinasPersoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutinasPersoAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutinasPersoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
