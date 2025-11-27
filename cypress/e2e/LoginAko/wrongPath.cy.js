import{emailTests}from'../../support/sharedTests'
const viewports=['macbook-15','iphone-6']
viewports.forEach((vp)=>{
    describe(`recuperarPassHappyPath:${vp}`,()=>{
        beforeEach(()=>{
            cy.viewport(vp)
            cy.visit('https://ticketazo.com.ar/auth/login')
        })
        it('sinDatos',()=>{
            cy.get('[data-cy="input-email"]').type('a@a.com')
            cy.get('[data-cy="input-password"]').type('Adm1n???')
            cy.get('[data-cy="input-email"]').clear()
            cy.get('[data-cy="input-password"]').clear()
            cy.get('body').click(0,0)
            cy.inputVacios(2)
        })
        emailTests()
        it('correoInvalido',()=>{
        cy.get('[data-cy="input-email"]').type('a@a')
        cy.get('[data-cy="input-password"]').type('Adm1n???')
        cy.get('[data-cy="btn-login"]').click()
        cy.get('[data-cy="error-message"]')
        .contains('Correo o contraseña incorrectos')
        .should('be.visible')
        })
    })
})