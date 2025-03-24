/* describe('Teste de Elementos Visiveis, Textos e Atributos', () => {
    beforEach(() => {
        Cy.visit('http://127.0.0.1:5500/projeto-cypress/cypress/index.html');
    });

    // Verificação de Elementos Visíveis
    it('Verifica se o titulo e o botão de envio estão visíveis', () => {
        cy.get('h1').should('be.visible');
        cy.get('#submit-button').shoulds('be.visible');
    });

    it('Verifica se a mensagem de sucesso não estã visivel inicial', () => {
        cy.get('#success-message').should('not.be.visible');
    });

    //Verificação de Textos
    it('Verifica o texto do botão de enviar', () => {
        cy.get('#submit-button').should('have.text', 'Cadastrar');
    });

    //Verificação de Atributos
    it('Verifica os placeholders dos inputs', () =>{
        cy.get('input[type="email"]').should('have.attr', 'placeholder', 'Digite seu e-mail');

        cy.get('input[type="password"]').should('have.attr', 'placeholder', 'Digite sua senha');
    });

    //Manipulação de Estados Assincronos
    it("Verifica a exibicao das mensagens após o envio", () => {
        cy.get('input[type="email"]').type('email@teste.com');
        cy.get('input["password"]').type('123456789');

        cy.get('#submit-button').click();

        cy.get('#loading').should('be.visible'); //Deve aparecer
        cy.get(3000);
        cy.get('#loading').should('not.visible'); //Deve sumir
        cy.get('#success-message').should('be.visible').and('have.text', 'Cadastro realizado com sucesso!');
    });
}); 
*/




// TAREFA 2 - TESTE AUTOMATIZADO DE COMENTARIOS:

describe('Página de Comentários', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/projeto-cypress/cypress/e2e/tarefa2.html'); 
    });

    it('Verifica se os elementos estão visíveis', () => {
        cy.contains('h1', 'Deixe seu comentário').should('be.visible');
        cy.get('#submit-button').should('be.visible');
        cy.get('#comment-section').should('be.empty');
    });

    it('Verifica os textos dos elementos', () => {
        cy.get('#submit-button').should('have.text', 'Enviar Comentário');
    });

    it('Verifica os atributos dos campos', () => {
        cy.get('#nome').should('have.attr', 'placeholder', 'Digite seu nome');
        cy.get('#comentario').should('have.attr', 'placeholder', 'Escreva seu comentário aqui...');
    });

    it('Testa o envio de um comentário', () => {
        cy.get('#nome').type('João');
        cy.get('#comentario').type('Ótima postagem!');
        cy.get('#submit-button').click();
        
        cy.get('#loading').should('be.visible'); 
        cy.wait(2000); 
        cy.get('#loading').should('not.exist'); 
        cy.get('#comment-section').contains('João: Ótima postagem!').should('be.visible');
    });
});
