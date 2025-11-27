import{buttonTests}from'../../support/sharedTests'
import{generarNumeroRandom}from'../../support/functions'
import{generarEmailRandom}from'../../support/functions'
const viewports=['macbook-15','iphone-6']
viewports.forEach((vp)=>{
    describe(`registroHappyPath:${vp}`,()=>{
        let numeroRandom
        let emailRandom
        beforeEach(()=>{
            cy.viewport(vp)
            emailRandom=generarEmailRandom()
            numeroRandom=generarNumeroRandom()
            cy.visit('https://ticketazo.com.ar/auth/registerUser')
        })
        it('crearUsuario',()=>{
            cy.get('[data-cy="input-nombres"]').type(':3')
            cy.get('[data-cy="input-apellido"]').type(':3')
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
            cy.url().should('eq','https://ticketazo.com.ar/auth/login')
        })
        buttonTests()
    })
})