//describe("Acessando o site da guairaca.com", () => {


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

 /* it("Deve fazer login no portal do aluno", () => {
    cy.visit("http://127.0.0.1:5500/");

    cy.get('#register-form').should('be.visible');

    cy.get('.input-field').should('be.visible', 3);

    cy.get('#register-button').should('have.text', 'Cadastrar');

    cy.get('.login-link').should('be.visible');

    cy.get('input[type="text"]').type("João");

    cy.get('input[type="email"]').type("joaovitor@gmail.com");

    cy.get('input[type="password"]').type("vitorjoao");

    cy.get('#register-button').click();
  })*/
//}); 


// AULA SLIDE 5

/* describe('Teste completo de esperas e assercoes', () => {
  it('Devo acessar a página, aguardar os elementos', () => {
    //visita o site de exemplo
    cy.visit('https://example.cypress.io/todo');

    //Espera implicito: verifica se a lista de tarefas está visível
    cy.get('.todo-list').should('be.visible')

    //Adiciona uma nova tarefa e verifica se foi adicionado corretamente
    cy.get('.new-todo').type('Estudar Cypress{enter}'),
    cy.get('todo-list li').should('contain.text', 'Estudar Cypress');

    //Marca a tarefa como concluída e verifica a mesma.
    cy.get('.todo-list li').last().find('toggle').click();
    cy.get('.todo-list li').last().should('have.class', 'completed');

    //Verifica a quantidade de item na lista
    cy.get('todo-list li').should('have.lenght', 3);

    //Verifica se um item específico está na lista
    cy.contains('todo-list li', 'Estudar Cypress').should('be.visible');  
  });

})*/

describe('Automação de Testes em Formulário de Cadastro', () => {
  it('Devo testar o formulário', () => {
    cy.visit('http://127.0.0.1:5500/projeto-cypress/cypress/tarefa2.html');

    cy.get('#nome').should('be.visible');
    cy.get('#nome').type('João Silva');
    cy.get('#nome').should('have.value', 'João Silva');

    cy.get('#email').should('be.visible');
    cy.get('#email').type('joao.silva@email.com');
    cy.get('#email').should('have.value', 'joao.silva@email.com');

    cy.get('#telefone').should('be.visible');
    cy.get('#telefone').type('1199999999');
    cy.get('#telefone').should('be.visible', 10);


    cy.get('#senha').should('be.visible');
    cy.get('#senha').type('Teste@123');
    cy.get('#senha').should('have.value', 'Teste@123');

    cy.get('#confirma_senha').should('be.visible');
    cy.get('#confirma_senha').type('Teste@123');
    cy.get('#confirma_senha').should('have.value', 'Teste@123');

    cy.contains('Cadastrar').click();
    
    cy.get('form').submit();


  })
})