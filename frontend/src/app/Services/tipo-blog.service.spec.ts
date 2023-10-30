import { TestBed } from '@angular/core/testing';

import { TipoBlogService } from './tipo-blog.service';

describe('TipoBlogService', () => {
  let service: TipoBlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoBlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
