import { TestBed } from '@angular/core/testing';

import { ImcService } from './imc.service';

describe('ImcService', () => {
  let service: ImcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
