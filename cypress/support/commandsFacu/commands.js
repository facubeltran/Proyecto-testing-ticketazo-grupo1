// cypress/support/commands.js

Cypress.Commands.add('seleccionarAsientos', (cantidad) => {
    
    const asientosCapturados = [];

    // 1. Selección y Click
    cy.get('button[title*="Fila"]').not('[disabled]')
        .then(($lugares) => {
            // Usamos la variable 'cantidad' para cortar la lista
            return $lugares.slice(0, cantidad);
        })
        .each(($lugar) => {
            const coordenadasDelLugarActual = $lugar.attr('title');
            asientosCapturados.push(coordenadasDelLugarActual);
            
            // Click
            cy.wrap($lugar).click().wait(1000);
        })
        .then(() => {
            // Guardamos el alias para uso interno o externo
            cy.wrap(asientosCapturados).as('listaDeTitulos');
            return cy.wrap(asientosCapturados);
        });
});


Cypress.Commands.add('validarAsientos', (asientosCapturados) => { 
    let cantidadAsientos = 0
        // 2. Validación de textos (Transformación)
    // Usamos cy.wrap(asientosCapturados) para asegurarnos que corra después del loop anterior
    cy.wrap(asientosCapturados).each((info) => {
        cy.log('Validando: ' + info);
        const textoTransformado = info
            .replace('Fila ', 'F')
            .replace(',', '')
            .replace('Columna ', 'C') 
            .trim();
        
        cy.contains(textoTransformado).should('be.visible');
        cantidadAsientos =  cantidadAsientos + 1
        cy.wrap(cantidadAsientos)
    });

})

