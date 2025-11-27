import{emailTests}from'../../support/sharedTests'
const viewports=['macbook-15','iphone-6']
viewports.forEach((vp)=>{
    describe(`recuperarPassHappyPath:${vp}`,()=>{
        beforeEach(()=>{
            cy.viewport(vp)
            cy.visit('https://ticketazo.com.ar/auth/forgotPassword')
        })
        emailTests()
        it('sinDatos',()=>{
            cy.get('[data-cy="input-email"]').type('a@a.com')
            cy.press(Cypress.Keyboard.Keys.TAB)
            cy.get('[data-cy="input-email"]').clear()
            cy.get('body').click(0,0)
            cy.inputVacios(1)
        })
    })
})