import { generarEmailRandom } from '../../support/functions';

describe('mensajeErrorPass',()=>{
    let emailRandom;
    beforeEach(()=>{
        emailRandom = generarEmailRandom();
        cy.log(emailRandom)
        cy.visit('https://ticketazo.com.ar/auth/registerClient')
    })
    it('cuitInvalido', ()=>{
        cy.get('[data-cy="input-razon-social"]').type('HolaJuanCarlo')
        cy.get('[data-cy="input-cuit"]').type('ComoEstás')
        cy.get('[data-cy="select-provincia"]').type('Cordoba{enter}')
        cy.get('[data-cy="select-localidad"]').type('Cordoba{enter}')
        cy.get('[data-cy="input-direccion"]').type('12345678')
        cy.get('[data-cy="input-telefono"]').type('1234567890')
        cy.get('[data-cy="input-email"]').type(emailRandom)
        cy.get('[data-cy="input-confirmar-email"]').type(emailRandom)
        cy.get('[data-cy="input-password"]').type('Adm1n???')
        cy.get('[data-cy="input-repetir-password"]').type('Adm1n???')
        cy.get('[data-cy="btn-registrarse"]').click()
        cy.wait(2000)
        cy.url().should('eq','https://ticketazo.com.ar/auth/login')
    })
})

import{generarNumeroRandom}from '../../support/functions';
describe('mensajeErrorPass',()=>{
    let numeroRandom;
    beforeEach(()=>{
        numeroRandom = generarNumeroRandom();
        cy.log(numeroRandom)
        cy.visit('https://ticketazo.com.ar/auth/forgotPassword')
    })
    it('emailInvalido', ()=>{
        cy.get('[data-cy="input-email"]').type(numeroRandom)
        cy.get('[data-cy="btn-enviar"]').click()
        cy.get('[data-slot="error-message"]')
        .should('include.text','Incluye un signo "@" en la dirección de correo electrónico. La dirección')
        cy.get('[data-cy="success-message"]')
        .contains('Se ha enviado un correo para restablecer la contraseña')
    })
})

describe('mensajeErrorPass',()=>{
    beforeEach(()=>{
        cy.visit('https://ticketazo.com.ar/auth/registerUser')
    })
    it('passInvalida', ()=>{
        cy.get('[data-cy="input-nombres"]').type('Juan')
        cy.get('[data-cy="input-apellido"]').type('Carlo')
        cy.get('[data-cy="input-telefono"]').type('1234567890')
        cy.get('[data-cy="input-dni"]').type('12345678')
        cy.get('[data-cy="select-provincia"]').type('Cordoba{enter}')
        cy.get('[data-cy="select-localidad"]').type('Cordoba{enter}')
        cy.get('[data-type="day"]').type('20')
        cy.get('[data-type="month"]').type('5')
        cy.get('[data-type="year"]').type('1901')
        cy.get('[data-cy="input-email"]').type('asd@asd.com')
        cy.get('[data-cy="input-confirmar-email"]').type('asd@asd.com')
        cy.get('[data-cy="input-password"]').type('123')
        cy.get('[data-cy="input-repetir-password"]').type('123')
        cy.get('[data-cy="btn-registrarse"]').click()
        cy.wait(2000)
        cy.get('[data-cy="error-message"]').contains('La contraseña debe tener al menos 6 caracteres')
        cy.get('[data-cy="input-password"]').type('123456')
        cy.get('[data-cy="input-repetir-password"]').type('123456')
        cy.get('[data-cy="btn-registrarse"]').click()
        cy.wait(2000)
        cy.get('[data-cy="error-message"]')
        .contains('La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y símbolos.')
    })
})

describe('transferirEntrada',()=>{
    beforeEach(()=>{
        cy.viewport('macbook-15')
        cy.visit('https://ticketazo.com.ar/auth/login')
    })
    it('transferirEntrada', ()=>{
        cy.get('[data-cy="input-email"]').type('homejo5153@filipx.com')
        cy.get('[data-cy="input-password"]').type('Admin1234*')
        cy.get('[data-cy="btn-login"]').click()
        cy.get('[href="/tickets/list"]').click()
        cy.get('[data-cy="btn-ver-entradas-7"]').click()
        cy.wait(2000)
        cy.get('[data-cy="btn-ver-ticket-2980"]').click()
        cy.get('button').contains('Transferir Entrada').click()
        cy.get('[id="email"]').type('shaviitoo@gmail.com')
        cy.get('button[type="submit"]').click()
        cy.wait(2000)
        cy.contains('button[type="button"]', /^Transferir$/).click()
        cy.wait(2000)
    })
})

// describe('buttonsSmartphone',()=>{
//     beforeEach(()=>{
//         cy.viewport(412, 915)
//         cy.visit('https://ticketazo.com.ar/auth/login')
//     })
//     it.only('buttonsSmartphone', ()=>{
//         cy.get('[data-cy="btn-forgot-password"]').trigger('touchstart').trigger('touchend')
//         cy.wait(2000)
//         cy.url().should('eq','https://ticketazo.com.ar/auth/login')
//         cy.get('[data-cy="btn-register-user"]').trigger('click')
//         cy.wait(2000)
//         cy.url().should('eq','https://ticketazo.com.ar/auth/login')
//         cy.get('[data-cy="btn-register-client"]').trigger('click')
//         cy.wait(2000)
//         cy.url().should('eq','https://ticketazo.com.ar/auth/login')
//         cy.get('[data-cy="btn-google-login"]').trigger('touchstart').trigger('touchend')
//     })
// })

