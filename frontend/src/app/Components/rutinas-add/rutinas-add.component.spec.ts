import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinasAddComponent } from './rutinas-add.component';

describe('RutinasAddComponent', () => {
  let component: RutinasAddComponent;
  let fixture: ComponentFixture<RutinasAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RutinasAddComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RutinasAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
