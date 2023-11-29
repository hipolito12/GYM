import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { PagosComponent } from './pagos.component';
import { UserService } from '../../Services/user.service';
import { of, throwError } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

describe('PagosComponent', () => {
  let component: PagosComponent;
  let fixture: ComponentFixture<PagosComponent>;
  let userServiceSpy: jasmine.SpyObj<UserService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('UserService', ['ProximoPago']);

    TestBed.configureTestingModule({
      declarations: [PagosComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: UserService, useValue: spy }],
    });

    fixture = TestBed.createComponent(PagosComponent);
    component = fixture.componentInstance;
    userServiceSpy = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ProximoPago on ngOnInit and set component properties on success', fakeAsync(() => {
    const mockResponse = {
      respuesta: { preciocuota: { valor: 100 }, FechaPago: new Date() },
    };
    userServiceSpy.ProximoPago.and.returnValue(of(mockResponse));

    component.ngOnInit();
    tick();

    expect(userServiceSpy.ProximoPago).toHaveBeenCalled();
    expect(component.precio).toBe(100);
    // Add more expectations based on your component logic
  }));

  it('should handle error from ProximoPago service call', fakeAsync(() => {
    const errorMessage = 'An error occurred';
    userServiceSpy.ProximoPago.and.returnValue(throwError(errorMessage));

    component.ngOnInit();
    tick();

    expect(userServiceSpy.ProximoPago).toHaveBeenCalled();
    expect(component.precio).toBe(0); // Assuming a default value for precio on error
    // Add more expectations or error handling logic based on your component
  }));

  // Add more tests based on your component logic
});
