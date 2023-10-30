import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoBlogComponent } from './tipo-blog.component';

describe('TipoBlogComponent', () => {
  let component: TipoBlogComponent;
  let fixture: ComponentFixture<TipoBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
