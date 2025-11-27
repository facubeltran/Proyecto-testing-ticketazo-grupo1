import{emailTests}from'../../support/sharedTests'
const viewports=['macbook-15','iphone-6']
viewports.forEach((vp)=>{
    describe(`crearEventoWrongPath:${vp}`,()=>{
        beforeEach(()=>{
            cy.viewport(vp)
            cy.visit('https://ticketazo.com.ar/auth/registerClient')
        })
        it('sinDatos',()=>{
            cy.get('[data-cy="btn-registrarse"]').click()
            cy.inputVacios(10)
        })
        it('telefonoIncompleto',()=>{
            cy.get('[data-cy="input-telefono"]').type('0').blur()
            cy.contains('[data-slot="error-message"]',/Utiliza un formato que coincida con el solicitado|Please match the requested format.|Please match the format requested.|Haz coincidir el formato solicitado./).should('be.visible')
        })
        emailTests()
        it('correoInvalido',()=>{
            cy.registroClienteFijo()
            cy.registroModificable('a@a','a@a','Adm1n???','Adm1n???')
            cy.get('[data-cy="btn-registrarse"]').click()
            cy.get('[data-cy="error-message"]')
            .contains('El correo electrónico no es válido')
            .should('be.visible')
        })
        it('correoNoCoincide',()=>{
            cy.registroClienteFijo()
            cy.registroModificable('a@a','aa@a','Adm1n???','Adm1n???')
            cy.get('[data-cy="btn-registrarse"]').click()
            cy.get('[data-cy="error-message"]')
            .contains('Los correos electrónicos no coinciden')
            .should('be.visible')
        })
        it('passInvalida',()=>{
            cy.registroClienteFijo()
            cy.registroModificable('a@a.com','a@a.com','123456','123456')
            cy.get('[data-cy="btn-registrarse"]').click()
            cy.get('[data-cy="error-message"]')
            .contains('La contraseña debe tener al menos 8 caracteres')
            .should('be.visible')
        })
        it('passNoCoincide',()=>{
            cy.registroClienteFijo()
            cy.registroModificable('a@a','a@a','123456','1234567')
            cy.get('[data-cy="btn-registrarse"]').click()
            cy.get('[data-cy="error-message"]')
            .contains('Las contraseñas no coinciden')
            .should('be.visible')
        })
    })
})