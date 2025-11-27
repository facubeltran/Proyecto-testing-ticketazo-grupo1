import{emailTests}from'../../support/sharedTests'
const viewports=['macbook-15','iphone-6']
viewports.forEach((vp)=>{
    describe(`registroWrongPath:${vp}`,()=>{
        beforeEach(()=>{
            cy.viewport(vp)
            cy.visit('https://ticketazo.com.ar/auth/registerUser')
        })
        it('sinDatos',()=>{
            cy.get('[data-cy="btn-registrarse"]').click()
            cy.inputVacios(11)
        })
        it('telefonoIncompleto',()=>{
            cy.get('[data-cy="input-telefono"]').type('0').blur()
            cy.contains('[data-slot="error-message"]',/Utiliza un formato que coincida con el solicitado|Please match the requested format.|Please match the format requested.|Haz coincidir el formato solicitado./).should('be.visible')
        })
        it('dniIncompleto',()=>{
            cy.get('[data-cy="input-dni"]').type('0').blur()
            cy.contains('[data-slot="error-message"]',/Utiliza un formato que coincida con el solicitado|Please match the requested format.|Please match the format requested.|Haz coincidir el formato solicitado./).should('be.visible')
        })
        it('fechaInvalida',()=>{
            cy.get('[data-type="day"]').type('30')
            cy.get('[data-type="month"]').type('12')
            cy.get('[data-type="year"]').type('9999').blur()
            cy.contains('[data-slot="error-message"]',/El valor debe ser|Value must be/).should('be.visible')
        })
        emailTests()
        it('correoInvalido',()=>{
            cy.registroUsuarioFijo()
            cy.registroModificable('a@a','a@a','Adm1n???','Adm1n???')
            cy.get('[data-cy="btn-registrarse"]').click()
            cy.get('[data-cy="error-message"]')
            .contains('El correo electrónico no es válido')
            .should('be.visible')
        })
        it('correoNoCoincide',()=>{
            cy.registroUsuarioFijo()
            cy.registroModificable('a@a','aa@a','Adm1n???','Adm1n???')
            cy.get('[data-cy="btn-registrarse"]').click()
            cy.get('[data-cy="error-message"]')
            .contains('Los correos electrónicos no coinciden')
            .should('be.visible')
        })
        it('passInvalida',()=>{
            cy.registroUsuarioFijo()
            cy.registroModificable('a@a.com','a@a.com','123456','123456')
            cy.get('[data-cy="btn-registrarse"]').click()
            cy.get('[data-cy="error-message"]')
            .contains('La contraseña debe tener al menos 8 caracteres')
            .should('be.visible')
        })
        it('passNoCoincide',()=>{
            cy.registroUsuarioFijo()
            cy.registroModificable('a@a','a@a','123456','1234567')
            cy.get('[data-cy="btn-registrarse"]').click()
            cy.get('[data-cy="error-message"]')
            .contains('Las contraseñas no coinciden')
            .should('be.visible')
        })
    })
})