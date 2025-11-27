import{buttonTests}from'../../support/sharedTests'
import{generarEmailRandom}from'../../support/functions'
const viewports=['macbook-15','iphone-6']
viewports.forEach((vp)=>{
    describe(`crearEventoHappyPath:${vp}`,()=>{
        let emailRandom
        beforeEach(()=>{
            cy.viewport(vp)
            emailRandom=generarEmailRandom()
            cy.visit('https://ticketazo.com.ar/auth/registerClient')
        })
        it('crearCliente',()=>{
            cy.get('[data-cy="input-razon-social"]').type(':3')
            cy.get('[data-cy="input-cuit"]').type(':3')
            cy.get('[data-cy="select-provincia"]').type('Cordoba{enter}')
            cy.get('[data-cy="select-localidad"]').type('Cordoba{enter}')
            cy.get('[data-cy="input-direccion"]').type(':3')
            cy.get('[data-cy="input-telefono"]').type('1234567890')
            cy.get('[data-cy="input-email"]').type(emailRandom)
            cy.get('[data-cy="input-confirmar-email"]').type(emailRandom)
            cy.get('[data-cy="input-password"]').type('Adm1n???')
            cy.get('[data-cy="input-repetir-password"]').type('Adm1n???')
            cy.get('[data-cy="btn-registrarse"]').click()
        })
        it('switchEstablecimiento',()=>{
            cy.get('[data-cy="switch-establecimiento"] input[type="checkbox"]')
            .click().should('be.checked')
            cy.get('[data-cy="switch-establecimiento"] input[type="checkbox"]')
            .click().should('not.be.checked')
        })
        buttonTests()
    })
})