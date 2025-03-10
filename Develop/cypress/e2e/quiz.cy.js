describe('Tech Quiz E2E Test', () => {
    it('Completes a quiz successfully', () => {
      cy.visit('/');
      cy.get('button').contains('Start').click();
      cy.get('.question').should('exist');
  
      for (let i = 0; i < 10; i++) {
        cy.get('.option').first().click();
      }
  
      cy.get('.quiz-over').should('contain', 'Quiz Over');
      cy.get('.score').should('exist');
    });
  });
  