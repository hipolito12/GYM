import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinasPersoUpdateComponent } from './rutinas-perso-update.component';

describe('RutinasPersoUpdateComponent', () => {
  let component: RutinasPersoUpdateComponent;
  let fixture: ComponentFixture<RutinasPersoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutinasPersoUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutinasPersoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
