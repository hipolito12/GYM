import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SigninComponent } from './signin.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { LoginService } from '../../Services/login.service';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let mockLoginService: any;
  let mockRouter: any;

  beforeEach(async () => {
    mockLoginService = {
      Registrar: jasmine
        .createSpy('Registrar')
        .and.returnValue(of({ token: 'dummyToken' })),
    };

    mockRouter = {
      navigate: jasmine.createSpy('navigate'),
    };

    await TestBed.configureTestingModule({
      declarations: [SigninComponent],
      imports: [RouterTestingModule],
      providers: [
        FormBuilder,
        { provide: LoginService, useValue: mockLoginService },
        { provide: Router, useValue: mockRouter },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call Registrar method on LoginService', () => {
    component.Registrar();
    expect(mockLoginService.Registrar).toHaveBeenCalled();
  });
});
