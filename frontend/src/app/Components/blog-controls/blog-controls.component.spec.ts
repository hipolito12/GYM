import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogControlsComponent } from './blog-controls.component';

describe('BlogControlsComponent', () => {
  let component: BlogControlsComponent;
  let fixture: ComponentFixture<BlogControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogControlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
