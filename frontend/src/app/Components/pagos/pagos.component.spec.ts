import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { PagosComponent } from './pagos.component';
import { UserService } from '../../Services/user.service';
import { of, throwError } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

describe('PagosComponent', () => {
  let component: PagosComponent;
  let fixture: ComponentFixture<PagosComponent>;
  let userServiceSpy: jasmine.SpyObj<UserService>;

  beforeEach(waitForAsync(() => {
    const spy = jasmine.createSpyObj('UserService', ['ProximoPago']);

    TestBed.configureTestingModule({
      declarations: [PagosComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: UserService, useValue: spy }],
    }).compileComponents();

    userServiceSpy = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(PagosComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ProximoPago on ngOnInit and set component properties on success', fakeAsync(() => {
    const mockResponse = {
      respuesta: { preciocuota: { valor: 2800 }, FechaPago: new Date() },
    };
    userServiceSpy.ProximoPago.and.returnValue(of(mockResponse));

    component.ngOnInit();
    tick();

    expect(userServiceSpy.ProximoPago).toHaveBeenCalled();
    expect(component.precio).toBe(2800);
  }));

  it('should handle error from ProximoPago service call', fakeAsync(() => {
    const errorMessage = 'An error occurred';
    userServiceSpy.ProximoPago.and.returnValue(throwError(errorMessage));

    component.ngOnInit();
    tick();

    expect(userServiceSpy.ProximoPago).toHaveBeenCalled();
    expect(component.precio).toBe(0);
  }));

  it('should handle the correct price (por separado)', () => {
    const mockResponse = {
      respuesta: { preciocuota: { valor: 2800 }, FechaPago: new Date() },
    };
    userServiceSpy.ProximoPago.and.returnValue(of(mockResponse));
    component.ObtenerPago();
    expect(component.precio).toBe(2800);
  });
  it('should handle the correct date (por separado)', () => {
    const mockResponse = {
      respuesta: {
        preciocuota: { valor: 2800 },
        FechaPago: new Date('2023-10-06 21:47:32.128000'),
      },
    };
    userServiceSpy.ProximoPago.and.returnValue(of(mockResponse));
    component.ObtenerPago();
    const expectedFormattedDate = '06/11/2023';
    expect(component.fecha).toBe(expectedFormattedDate);
  });

  /* it('should handle the correct price and date ', () => {
    const mockResponse = {
      respuesta: {
        preciocuota: { valor: 2800 },
        FechaPago: new Date('2023-10-06 21:47:32.128000'),
      },
    };
    userServiceSpy.ProximoPago.and.returnValue(of(mockResponse));
    component.ObtenerPago();
    expect(component.precio).toBe(2800);
    const expectedFormattedDate = '06/11/2023';

    expect(component.fecha).toBe(expectedFormattedDate);
  }); */
});
