import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoRutinaComponent } from './tipo-rutina.component';

describe('TipoRutinaComponent', () => {
  let component: TipoRutinaComponent;
  let fixture: ComponentFixture<TipoRutinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoRutinaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoRutinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
