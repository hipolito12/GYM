import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCRUDComponent } from './blog-crud.component';

describe('BlogCRUDComponent', () => {
  let component: BlogCRUDComponent;
  let fixture: ComponentFixture<BlogCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogCRUDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
