export const emailTests=()=>{
    it('sinArroba',()=>{
        cy.get('[data-cy="input-email"]').type('a').blur()
        cy.get('[data-slot="error-message"]').invoke('text')
        .should('match',/Incluye un signo "@" en la dirección de correo electrónico|Please include an '@' in the email address/)
    })
    it('sinTextoPostArroba',()=>{
        cy.get('[data-cy="input-email"]').type('a@').blur()
        cy.get('[data-slot="error-message"]').invoke('text')
        .should('match',/Introduce texto detrás del signo "@"|Please enter a part following '@'|Ingresa texto después del signo "@"/)
    })
    it('simboloPostArroba',()=>{
        cy.get('[data-cy="input-email"]').type('a@=').blur()
        cy.get('[data-slot="error-message"]').invoke('text')
        .should('match',/El texto detrás del signo "@" no debe incluir el símbolo|A part following '@' should not contain the symbol|El texto después del signo "@" no debe incluir el símbolo/)
    })
    it('puntoPostArroba',()=>{
        cy.get('[data-cy="input-email"]').type('a@.').blur()
        cy.get('[data-slot="error-message"]').invoke('text')
        .should('match',/El signo "." está colocado en una posición incorrecta en|'.' is used at a wrong position in/)
    })
}
export const buttonTests=()=>{
    it('iniciaSesionButton',()=>{
        cy.get('[data-cy="btn-login-link"]').click()
        cy.url().should('eq','https://ticketazo.com.ar/auth/login')
    })
    it('loginButton',()=>{
        cy.get('button').contains('Login').click({force:true})
        cy.url().should('eq','https://ticketazo.com.ar/auth/login')
    })
    it('logoWeb',()=>{
        cy.contains('a','Ticketazo').click()
        cy.url().should('eq','https://ticketazo.com.ar/')
    })
    it('switchThemeButton',()=>{
        cy.get('html').should('have.class','dark')
        cy.get('svg[role="presentation"]:visible').first().click()
        cy.get('html').should('have.class','light')
    })
}