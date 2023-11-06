import { TestBed } from '@angular/core/testing';

import { ProfesoresGuardGuard } from './profesores-guard.guard';

describe('ProfesoresGuardGuard', () => {
  let guard: ProfesoresGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProfesoresGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
