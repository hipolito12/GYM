describe('template spec', () => {
  it('informs user about incorrect password', () => {
    // Visitar la página de registro
    cy.visit('localhost:4200/signin');

    // Rellenar el formulario con una contraseña incorrecta
    cy.get('#nombre').type('Nombre de ejemplo');
    cy.get('#apellido').type('Apellido de ejemplo');
    cy.get('#DNI').type('12345678');
    cy.get('#password').type('ContraseñaIncorrecta'); // Contraseña incorrecta
    cy.get('#RepetirContrasena').type('ContraseñaIncorrecta');
    cy.get('#direccion').type('Dirección de ejemplo');
    cy.get('#phone').type('123456789');
    cy.get('#email').type('correo@example.com');
    cy.get('#gender').select('Masculino');

    // Enviar el formulario
    cy.get('form').submit();

    // Verificar que se muestra un mensaje de error
    cy.get('#passwordToast').should(
      'contain',
      'La contraseña no cumple con los requisitos.'
    );
  });
  it('completes the registration form with correct type of password', () => {
    // Visitar la página
    cy.visit('localhost:4200/signin');

    // Rellenar el formulario
    cy.get('#nombre').type('Nombre de ejemplo');
    cy.get('#apellido').type('Apellido de ejemplo');
    cy.get('#DNI').type('12345678');
    cy.get('#password').type('P@ssw0rd');
    cy.get('#RepetirContrasena').type('P@ssw0rd');
    cy.get('#direccion').type('Dirección de ejemplo');
    cy.get('#phone').type('123456789');
    cy.get('#email').type('correo@example.com');
    cy.get('#gender').select('Masculino');

    // Enviar el formulario
    cy.get('form').submit();

    cy.url().should('include', '/localhost:4200/login');
  });

  /*   it('completes the registration form', () => {
    // Visitar la página
    cy.visit('localhost:4200/login');

    // Rellenar los campos

    // Enviar el log in
    cy.get('form').submit();

    cy.url().should('include', '/localhost:4200/login');
  }); */
});
