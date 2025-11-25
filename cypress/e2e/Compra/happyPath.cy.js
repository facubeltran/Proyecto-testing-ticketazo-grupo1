describe('Compras sin login', () => {
            it('Caso 2: Visualizar eventos disponibles', () => {
            cy.visit('https://ticketazo.com.ar')
            cy.get('[data-cy="btn-ver-evento-7"]').click()
            cy.get('h1').should('be.visible').and('contain','Grido Tech Advance')
            cy.get('span').should('be.visible').and('contain','lunes, 12 de mayo de 2025')
            cy.get('span').should('be.visible').and('contain','6:30 PM')
            cy.get('span').should('be.visible').and('contain','Cervantes')
        })
})

describe('Compras con Login', () => {

    beforeEach(() => {
        cy.visit('https://ticketazo.com.ar/auth/login')
        cy.fixture('compra').then((data) => {
            cy.get('[data-cy="input-email"]').type(data[0].emailExistente)
            cy.get('[data-cy="input-password"]').type(data[0].password)
            cy.get('[data-cy="btn-login"]').click()
        })
    })
    it('Caso 1: Chequear disponibilidad de lugares', () => {
        cy.get('[data-cy="btn-ver-evento-8"]').click()
        cy.contains('Adquirir entrada').click()
        cy.contains('Auditorio').click()
        cy.get('button[title="Fila 9, Columna 6"]').should('be.disabled')
    })
})

