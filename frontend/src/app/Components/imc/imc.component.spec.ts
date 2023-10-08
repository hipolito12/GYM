import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IMCComponent } from './imc.component';

describe('IMCComponent', () => {
  let component: IMCComponent;
  let fixture: ComponentFixture<IMCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IMCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IMCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
