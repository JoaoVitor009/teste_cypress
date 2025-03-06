describe("Acessando o site da guairaca.com", () => {


  /* it("Deve clicar no jogo do Bragantino", () => {
    cy.visit('https://globo.com');
    cy.contains('Bragantino X Souza; LANCES').click();
  }); */

  //Exemplo utilizando classse css
  /*it ("Deve clicar no mapa", () => {
    cy.visit("https://guairaca.com.br/");
    cy.get('.ic_endereco_form').click();
  });
*/

  it("Deve fazer login no portal do aluno", () => {
    cy.visit("http://127.0.0.1:5500/");

    cy.get('#register-form').should('be.visible');

    cy.get('.input-field').should('be.visible', 3);

    cy.get('#register-button').should('have.text', 'Cadastrar');

    cy.get('.login-link').should('be.visible');

    cy.get('input[type="text"]').type("João");

    cy.get('input[type="email"]').type("joaovitor@gmail.com");

    cy.get('input[type="password"]').type("vitorjoao");

    cy.get('#register-button').click();
  })

}); 