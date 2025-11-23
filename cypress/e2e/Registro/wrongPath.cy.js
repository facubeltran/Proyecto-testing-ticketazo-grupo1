describe('mensajeErrorPass',()=>{
    beforeEach(()=>{
        cy.visit('https://ticketazo.com.ar/auth/registerUser')
    })

    it.only('PassWrongPath', ()=>{
        cy.get('[data-cy="input-nombres"]').type('Juan')
        cy.get('[data-cy="input-apellido"]').type('Carlo')
        cy.get('[data-cy="input-telefono"]').type('1234567890')
        cy.get('[data-cy="input-dni"]').type('12345678')
        cy.get('[data-cy="select-provincia"]').type('Cordoba{enter}')
        cy.get('[data-cy="select-localidad"]').type('Cordoba{enter}')
        cy.get('[data-type="day"]').type('20')
        cy.get('[data-type="month"]').type('5')
        cy.get('[data-type="year"]').type('1901')
        cy.get('[data-cy="input-email"]').type('asd@asd.com')
        cy.get('[data-cy="input-confirmar-email"]').type('asd@asd.com')
        cy.get('[data-cy="input-password"]').type('123')
        cy.get('[data-cy="input-repetir-password"]').type('123')
        cy.get('[data-cy="btn-registrarse"]').click()
        cy.get('[data-cy="error-message"]').contains('La contraseña debe tener al menos 6 caracteres')
        cy.get('[data-cy="input-password"]').type('123456')
        cy.get('[data-cy="input-repetir-password"]').type('123456')
        cy.get('[data-cy="btn-registrarse"]').click()
        cy.get('[data-cy="error-message"]')
        .contains('La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y símbolos.')
    })

})