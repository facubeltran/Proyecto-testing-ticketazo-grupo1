const viewports=['macbook-15','iphone-6']
viewports.forEach((vp)=>{
    describe(`recuperarPassHappyPath:${vp}`,()=>{
        beforeEach(()=>{
            cy.viewport(vp)
            cy.visit('https://ticketazo.com.ar/auth/forgotPassword')
        })
        it('passRestablecida',()=>{
            cy.get('[data-cy="input-email"]').type('homejo5153@filipx.com')
            cy.get('[data-cy="btn-enviar"]').click()
            cy.get('[data-cy="success-message"]')
            .contains('Se ha enviado un correo para restablecer la contraseña').should('be.visible')
        })
    })
})