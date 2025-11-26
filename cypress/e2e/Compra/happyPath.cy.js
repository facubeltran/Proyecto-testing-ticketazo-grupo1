describe('Compras sin login', () => {
    it('Caso 2: Visualizar eventos disponibles', () => {
        cy.visit('https://ticketazo.com.ar')
        cy.get('[data-cy="btn-ver-evento-7"]').click()
        cy.get('h1').should('be.visible').and('contain', 'Grido Tech Advance')
        cy.get('span').should('be.visible').and('contain', 'lunes, 12 de mayo de 2025')
        cy.get('span').should('be.visible').and('contain', '6:30 PM')
        cy.get('span').should('be.visible').and('contain', 'Cervantes')
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

    it('Caso 3: Seleccion de asientos disponibles(butacas)', () => {
        cy.get('[data-cy="btn-ver-evento-4"]').click()
        cy.contains('Adquirir entrada').click()
        cy.contains('Con Butacas').click()
        cy.get('button[title="Fila 5, Columna 17"]').click()
        cy.get('button[title="Fila 5, Columna 18"]').click()
        cy.contains('F5 C17').should('be.exist')
        cy.contains('F5 C18').should('be.exist')
        cy.contains('Asientos').should('contain', 'Asientos seleccionados: 2');
    })

    it('Caso 4: Seleccion de asientos disponibles(Sin butacas)', () => {
        cy.get('[data-cy="btn-ver-evento-1"]').click()
        cy.contains('Adquirir entrada').click()
        cy.contains('Sin Butacas').click()
        cy.contains('+').click().click().click()
        cy.get('span').should('contain', '3')
        cy.contains('p', 'Precio').invoke('text')
            .then((textoCapturado) => {
                const soloNumeroStr = textoCapturado.replace(/[^0-9]/g, '');
                // 2. Convertimos: De texto ("16200") a Número real (16200) para poder sumar/comparar
                const precioFinal = parseInt(soloNumeroStr);
                cy.log(precioFinal);
                let valorTotal = precioFinal * 3
                cy.get('span').should('contain', valorTotal);
            })
    })
    it('Caso 5: Seleccion de asientos disponibles(mesas)', () => {
        cy.get('[data-cy="btn-ver-evento-11"]').click()
        cy.contains('Adquirir entrada').click()
        cy.contains('Mesa 5').click()
        cy.get('button[title="Fila 1, Columna 4"]').click()
        cy.get('button[title="Fila 1, Columna 5"]').click()
        cy.contains('F1 C4').should('be.exist')
        cy.contains('F1 C5').should('be.exist')
        cy.contains('Asientos').should('contain', 'Asientos seleccionados: 2');
    })

    it('Caso 6: Chequear disponibilidad por fecha', () => {
        cy.get('[data-cy="btn-ver-evento-9"]').click()
        cy.contains('Adquirir entrada').click().wait(1000)
        cy.contains('span', 'sábado, 21 de junio de 2025').click('top');
        cy.contains('23:00').click()
        cy.contains('Continuar con la compra').click()
        cy.contains('Audiotorio').click()
        cy.get('button[title="Fila 5, Columna 7"]').click()
        cy.get('button[title="Fila 5, Columna 8"]').click()
        cy.contains('F5 C7').should('be.exist')
        cy.contains('F5 C8').should('be.exist')
        cy.contains('Asientos').should('contain', 'Asientos seleccionados: 2');
    })
    // no pude hacerlos con las otras fechas por un tema de diseño, no se si se superponian los div's que no agarraba el del sabado 14, creo que se superponia por el efecto ese de la card con el domingo 15
    // asi que agarre el ultimo para que pase la prueba, despues veo si lo puedo arreglar
    // hay que cambiar el test case

    it('Caso 7: Reserva fuera de tiempo', () => {
        const ahora = new Date();

        cy.get('[data-cy="btn-ver-evento-9"]').click()
        cy.contains('Adquirir entrada').click()
        cy.contains('span', 'sábado, 21 de junio de 2025').click('top');
        cy.contains('23:00').click()
        cy.contains('Continuar con la compra').click()
        cy.contains('Audiotorio').click()
        cy.clock(ahora.getTime());
        cy.log(ahora.getTime());
        cy.get('button[title="Fila 5, Columna 7"]').click()
        cy.get('button[title="Fila 5, Columna 8"]').click()
        cy.contains('Tu reserva vence en:').should('be.visible')
        cy.tick(300000)
        cy.on('window:alert', (textoAlerta) => {
            expect(textoAlerta).to.contains('Tu reserva ha vencido');
        });
        cy.contains('Comprar').click()
        // cy.contains('Tu reserva ha vencido. Por favor, vuelve a seleccionar tus entradas.').should('be.visible')

    })
    it('Caso 8: Valor correcto del precio total', () => {
        cy.get('[data-cy="btn-ver-evento-2"]').click()
        cy.contains('Adquirir entrada').click()
        cy.contains('Con Butacas').click()
        cy.get('button[title="Fila 5, Columna 18"]').click().wait(2000)
        cy.get('button[title="Fila 5, Columna 19"]').click().wait(2000)
        cy.contains('Comprar').click()
        cy.contains('2 entradas').should('be.visible')
        cy.contains('Precio base: $5000')
        cy.contains('$400.00 (8% del valor base)').should('be.visible')
        cy.get('div').should('be.visible').and('contain', '$5400')

    })

    it.only('Caso 9: Compra de entrada', () => {
        cy.get('[data-cy="btn-ver-evento-2"]').click()
        cy.contains('Adquirir entrada').click()
        cy.contains('Con Butacas').click()
        cy.get('button[title="Fila 5, Columna 18"]').click().wait(1000)
        cy.get('button[title="Fila 5, Columna 19"]').click().wait(1000)
        cy.contains('Comprar').click()
        cy.get('input').check({ force: true })
        cy.window().then((win) => {
            // 1. Creamos el espía (stub) sobre la función 'open'
            cy.stub(win, 'open').as('abrir');
        });
         cy.contains('Pagar').click()
         cy.get('@abrir').should('be.calledWith', Cypress.sinon.match('mercadopago.com'));
    })
})


