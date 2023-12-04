import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaacargoactividadAddComponent } from './personaacargoactividad-add.component';

describe('PersonaacargoactividadAddComponent', () => {
  let component: PersonaacargoactividadAddComponent;
  let fixture: ComponentFixture<PersonaacargoactividadAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaacargoactividadAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaacargoactividadAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
