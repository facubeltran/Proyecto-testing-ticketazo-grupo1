import{generarNumeroRandom}from '../../support/functions';
import {generarEmailRandom }from '../../support/functions';
describe('mensajeErrorPass',()=>{
    let numeroRandom;
    let emailRandom;
    beforeEach(()=>{
        emailRandom = generarEmailRandom();
        cy.log(emailRandom)
        numeroRandom = generarNumeroRandom();
        cy.log(numeroRandom)
        cy.visit('https://ticketazo.com.ar/auth/registerUser')
    })

    it('passInvalida', ()=>{
        cy.get('[data-cy="input-nombres"]').type('Juan')
        cy.get('[data-cy="input-apellido"]').type('Carlo')
        cy.get('[data-cy="input-telefono"]').type('1234567890')
        cy.get('[data-cy="input-dni"]').type(numeroRandom)
        cy.get('[data-cy="select-provincia"]').type('Cordoba{enter}')
        cy.get('[data-cy="select-localidad"]').type('Cordoba{enter}')
        cy.get('[data-type="day"]').type('20')
        cy.get('[data-type="month"]').type('5')
        cy.get('[data-type="year"]').type('1901')
        cy.get('[data-cy="input-email"]').type(emailRandom)
        cy.get('[data-cy="input-confirmar-email"]').type(emailRandom)
        cy.get('[data-cy="input-password"]').type('Adm1n???')
        cy.get('[data-cy="input-repetir-password"]').type('Adm1n???')
        cy.get('[data-cy="btn-registrarse"]').click()
        cy.wait(3000)
        cy.url().should('eq','https://ticketazo.com.ar/auth/login')
    })
    
})