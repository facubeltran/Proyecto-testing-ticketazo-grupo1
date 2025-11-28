// Me tomo la libertad de utilizar el nombre "akommands" para mi carpeta, ya que es mucho más fachero que "commandsAko". Pido disculpas encarecidamente si esto hiere la naming-sensivity del evaluador, pero me parece completamente necesario.

Cypress.Commands.add('registroUsuarioFijo',()=>{
    cy.get('[data-cy="input-nombres"]').type(':3')
    cy.get('[data-cy="input-apellido"]').type(':3')
    cy.get('[data-cy="input-telefono"]').type('1234567890')
    cy.get('[data-cy="input-dni"]').type('12345678')
    cy.get('[data-cy="select-provincia"]').type('Cordoba{enter}')
    cy.get('[data-cy="select-localidad"]').type('Cordoba{enter}')
    cy.get('[data-type="day"]').type('20')
    cy.get('[data-type="month"]').type('5')
    cy.get('[data-type="year"]').type('1901')
})
Cypress.Commands.add('registroModificable',(email, confirmarEmail, pass, confirmarPass)=>{
    cy.get('[data-cy="input-email"]').type(email)
    cy.get('[data-cy="input-confirmar-email"]').type(confirmarEmail)
    cy.get('[data-cy="input-password"]').type(pass)
    cy.get('[data-cy="input-repetir-password"]').type(confirmarPass)
})
Cypress.Commands.add('registroClienteFijo',()=>{
    cy.get('[data-cy="input-razon-social"]').type(':3')
    cy.get('[data-cy="input-cuit"]').type(':3')
    cy.get('[data-cy="select-provincia"]').type('Cordoba{enter}')
    cy.get('[data-cy="select-localidad"]').type('Cordoba{enter}')
    cy.get('[data-cy="input-direccion"]').type(':3')
    cy.get('[data-cy="input-telefono"]').type('1234567890')
})
Cypress.Commands.add('inputVacios',(cantidad)=>{
    for(let i=0;i<cantidad;i++){
        cy.get('[data-slot="error-message"]')
        .eq(i)
        .contains(/Completa este campo|Please fill out this field|Please fill in this field./)
        .should('be.visible')
    }
})