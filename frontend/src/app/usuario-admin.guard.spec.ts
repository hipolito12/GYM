import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UsuarioAdminGuard } from './Guards/usuario-admin.guard';
import { LoginService } from './Services/login.service';

describe('UsuarioAdminGuard', () => {
  let guard: UsuarioAdminGuard;
  let authServiceStub: Partial<LoginService>;
  let routerStub: Partial<Router>;
  let cookieServiceStub: Partial<CookieService>;

  beforeEach(() => {
    authServiceStub = {
      LoggedIn: () => true,
    };

    routerStub = {
      navigate: jasmine.createSpy('navigate'),
    };

    cookieServiceStub = {
      get: (name: string) => {
        if (name === 'rol') {
          return '1'; // Simulando un valor de rol para las pruebas
        }
        return '';
      },
    };

    TestBed.configureTestingModule({
      providers: [
        UsuarioAdminGuard,
        { provide: LoginService, useValue: authServiceStub },
        { provide: Router, useValue: routerStub },
        { provide: CookieService, useValue: cookieServiceStub },
      ],
    });

    guard = TestBed.inject(UsuarioAdminGuard);
  });

  it('should allow navigation for admin user', () => {
    // Simula un usuario autenticado con rol '1' (admin).
    cookieServiceStub.get = jasmine.createSpy('get').and.returnValue('1');

    const result = guard.canActivate();

    expect(result).toBe(true);
    expect(routerStub.navigate).not.toHaveBeenCalled(); // No debería haber llamadas a navigate
  });

  it('should allow navigation for regular user', () => {
    // Simula un usuario autenticado con rol '0' (regular user).
    cookieServiceStub.get = jasmine.createSpy('get').and.returnValue('0');

    const result = guard.canActivate();

    expect(result).toBe(true);
    expect(routerStub.navigate).not.toHaveBeenCalled(); // No debería haber llamadas a navigate
  });

  it('should prevent navigation for unauthenticated user', () => {
    // Simula un usuario no autenticado.
    authServiceStub.LoggedIn = () => false;

    const result = guard.canActivate();

    expect(result).toBe(false);
    expect(routerStub.navigate).toHaveBeenCalledWith(['/home']); // Debería haber una llamada a navigate
  });

  it('should prevent navigation for user with unknown role', () => {
    // Simula un usuario autenticado con un rol desconocido (ej. '2').
    cookieServiceStub.get = jasmine.createSpy('get').and.returnValue('2');

    const result = guard.canActivate();

    expect(result).toBe(false);
    expect(routerStub.navigate).toHaveBeenCalledWith(['/home']); // Debería haber una llamada a navigate
  });
});
