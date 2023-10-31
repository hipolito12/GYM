import { TestBed } from '@angular/core/testing';

import { RutinasPersoService } from './rutinas-perso.service';

describe('RutinasPersoService', () => {
  let service: RutinasPersoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RutinasPersoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
