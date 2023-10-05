import { TestBed } from '@angular/core/testing';

import { MisRutinasService } from './mis-rutinas.service';

describe('MisRutinasService', () => {
  let service: MisRutinasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MisRutinasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
