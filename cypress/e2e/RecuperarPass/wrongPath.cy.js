const viewports=['macbook-15','iphone-6']
viewports.forEach((vp)=>{
    describe(`recuperarPassHappyPath:${vp}`,()=>{
        beforeEach(()=>{
            cy.viewport(vp)
            cy.visit('https://ticketazo.com.ar/auth/forgotPassword')
        })
        it('sinArroba',()=>{
            cy.get('[data-cy="input-email"]').type('asd').blur()
            cy.get('[data-slot="error-message"]').invoke('text')
            .should('match',/Incluye un signo "@" en la dirección de correo electrónico|Please include an '@' in the email address/)
        })
        it('sinTextoPostArroba',()=>{
            cy.get('[data-cy="input-email"]').type('asd@').blur()
            cy.get('[data-slot="error-message"]').invoke('text')
            .should('match',/Introduce texto detrás del signo "@"|Please enter a part following '@'/)
        })
        it('simboloPostArroba',()=>{
            cy.get('[data-cy="input-email"]').type('test@=.com').blur()
            cy.get('[data-slot="error-message"]').invoke('text')
            .should('match',/El texto detrás del signo "@" no debe incluir el símbolo|A part following '@' should not contain the symbol/)
        })
        it('puntoPostArroba',()=>{
            cy.get('[data-cy="input-email"]').type('a@.').blur()
            cy.get('[data-slot="error-message"]').invoke('text')
            .should('match',/El signo "." está colocado en una posición incorrecta en la dirección|'.' is used at a wrong position in/)
        })
    })
})