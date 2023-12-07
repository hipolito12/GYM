import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { PagoCuotaService } from './pago-cuota.service';

describe('PagoCuotaService', () => {
  let service: PagoCuotaService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PagoCuotaService],
    });

    service = TestBed.inject(PagoCuotaService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify(); // Asegura que no haya solicitudes pendientes.
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send DatosPago request', () => {
    const mockPago = {
      /* ... your mock data for DatosPago ... */
    };

    service.DatosPago(mockPago).subscribe();

    const req = httpTestingController.expectOne(
      'http://localhost:3000/api/pagarCuota'
    );
    expect(req.request.method).toEqual('POST');
    // Aquí puedes verificar más detalles de la solicitud según tus necesidades.

    req.flush({
      /* ... mock response data ... */
    });
  });

  it('should send RegistrarPago request', () => {
    const mockPago = {
      /* ... your mock data for RegistrarPago ... */
    };

    service.RegistrarPago(mockPago).subscribe();

    const req = httpTestingController.expectOne(
      'http://localhost:3000/api/RegistrarPago'
    );
    expect(req.request.method).toEqual('POST');
    // Aquí puedes verificar más detalles de la solicitud según tus necesidades.

    req.flush({
      /* ... mock response data ... */
    });
  });
});
