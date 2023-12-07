import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../Services/login.service';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginServiceSpy: jasmine.SpyObj<LoginService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('LoginService', ['Ingresar']);
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule],
      providers: [{ provide: LoginService, useValue: spy }],
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    loginServiceSpy = TestBed.inject(
      LoginService
    ) as jasmine.SpyObj<LoginService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  /* 
  it('should call Ingresar method on valid input', () => {
    const validUser = {
      dni: '42349281',
      contrasena: 'P@ssword',
    };

    component.user = validUser;
    loginServiceSpy.Ingresar.and.returnValue(
      of({ token: 'fakeToken', nombre: 'fakeName', rol: 0 })
    );

    component.ValdaLogin();

    expect(loginServiceSpy.Ingresar).toHaveBeenCalledWith(validUser);
  }); */

  /*  it('should not call Ingresar method on invalid input', () => {
    const invalidUser = {
      dni: 'invalidDNI',
      contrasena: 'invalidPassword',
    };

    component.user = invalidUser;
    spyOn(window, 'alert'); // Mock the window.alert method

    component.ValdaLogin();

    expect(loginServiceSpy.Ingresar).not.toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith(
      'El usuario o la contraseña no son válidos. Prueba de nuevo.'
    );
  }); */
});
