const viewports=['macbook-15','iphone-6']
viewports.forEach((vp)=>{
  describe(`Compras sin login:${vp}`, () => {
  it("Caso 2: Visualizar eventos disponibles", () => {
    cy.visit("https://ticketazo.com.ar");
    cy.get('[data-cy="btn-ver-evento-7"]').click();
    cy.get("h1").should("be.visible").and("contain", "Grido Tech Advance");
    cy.get("span")
      .should("be.visible")
      .and("contain", "lunes, 12 de mayo de 2025");
    cy.get("span").should("be.visible").and("contain", "6:30 PM");
    cy.get("span").should("be.visible").and("contain", "Cervantes");
  });
});

describe(`Compras sin login:${vp}`, () => {
  beforeEach(() => {
    cy.visit("https://ticketazo.com.ar/auth/login");
    cy.fixture("compra").then((data) => {
      cy.get('[data-cy="input-email"]').type(data[0].emailExistente);
      cy.get('[data-cy="input-password"]').type(data[0].password);
      cy.get('[data-cy="btn-login"]').click();
    });

    it("Caso 7: Reserva fuera de tiempo", () => {
      const ahora = new Date();

      cy.get('[data-cy="btn-ver-evento-9"]').click();
      cy.contains("Adquirir entrada").click();
      cy.contains("span", "sábado, 21 de junio de 2025").click("top");
      cy.contains("23:00").click();
      cy.contains("Continuar con la compra").click();
      cy.contains("Audiotorio").click();
      cy.clock(ahora.getTime());
      cy.log(ahora.getTime());
      cy.get('button[title="Fila 5, Columna 7"]').click();
      cy.get('button[title="Fila 5, Columna 8"]').click();
      cy.contains("Tu reserva vence en:").should("be.visible");
      cy.tick(300000);
      cy.on("window:alert", (textoAlerta) => {
        expect(textoAlerta).to.contains("Tu reserva ha vencido");
      });
      cy.contains("Comprar").click();
      // cy.contains('Tu reserva ha vencido. Por favor, vuelve a seleccionar tus entradas.').should('be.visible')
    });
  });

  it("Caso 12: Error al elegir mas de 4 lugares(Con Butacas)", () => {
    cy.get('[data-cy="btn-ver-evento-4"]').click();
    cy.contains("Adquirir entrada").click();
    cy.contains("Con Butacas").click();
    cy.get('button[title="Fila 8, Columna 14"]').click().wait(1000);
    cy.get('button[title="Fila 8, Columna 15"]').click().wait(1000);
    cy.get('button[title="Fila 8, Columna 16"]').click().wait(1000);
    cy.get('button[title="Fila 8, Columna 17"]').click().wait(1000);
    cy.get("p")
      .contains("No puedes seleccionar más de 4 asientos por persona.")
      .should("be.visible");
  });

  it("Caso 13: Error al elegir mas de 4 lugares(Sin butacas)", () => {
    cy.get('[data-cy="btn-ver-evento-4"]').click();
    cy.contains("Adquirir entrada").click();
    cy.contains("Sin Butacas").click();
    cy.contains("+").click().click().click().click();
    cy.get("p")
      .contains("No se permiten más de 4 entradas por persona.")
      .should("be.visible");
  });

  it("Caso 14: No comprar sin aceptar terminos y condiciones", () => {
    cy.get('[data-cy="btn-ver-evento-1"]').click();
    cy.contains("Adquirir entrada").click();
    cy.contains("Con Butacas").click();
    cy.get('button[title="Fila 4, Columna 11"]').click().wait(1000);
    cy.get('button[title="Fila 4, Columna 12"]').click().wait(1000);
    cy.contains("Comprar").click();
    cy.contains("Pagar").should("be.disabled");
  });

  it("Caso 17:Error en compra de entrada(Sin butaca), al no seleccionar cantidad", () => {
    cy.get('[data-cy="btn-ver-evento-2"]').click();
    cy.contains("Adquirir entrada").click();
    cy.contains("Sin Butacas").click();
    cy.contains("+");
    cy.contains("Comprar").should("be.disabled");
  });
});

})


