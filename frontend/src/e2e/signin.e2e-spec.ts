import { browser, by, element } from 'protractor';

describe('Registro de Usuario', () => {
  beforeEach(() => {
    browser.get('http://localhost:4200/signin');
  });

  it('debería registrar un nuevo usuario', () => {
    element(by.id('nombre')).sendKeys('Nombre');
    element(by.id('apellido')).sendKeys('Apellido');
    element(by.id('DNI')).sendKeys('12345678');
    element(by.id('password')).sendKeys('contrasena123');
    element(by.id('RepetirContrasena')).sendKeys('contrasena123');
    element(by.id('direccion')).sendKeys('Dirección');
    element(by.id('phone')).sendKeys('123456789');
    element(by.id('email')).sendKeys('correo@ejemplo.com');
    element(by.id('gender')).sendKeys('Masculino'); // Asegúrate de que 'Masculino' sea el valor correcto

    element(by.id('registerButton')).click(); // Asegúrate de agregar un id al botón de registro

    // Aquí puedes agregar más expectativas según el comportamiento esperado después del registro
    /* Por ejemplo, esperar que la URL cambie o que aparezca un mensaje de éxito
    expect(browser.getCurrentUrl()).toEqual("localhost:4200/login");*/
  });
});
