import { TestBed } from '@angular/core/testing';

import { PagoCuotaService } from './pago-cuota.service';

describe('PagoCuotaService', () => {
  let service: PagoCuotaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagoCuotaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
