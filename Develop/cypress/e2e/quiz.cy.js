describe('Tech Quiz E2E Test', () => {
    it('completes a quiz successfully', () => {
      cy.visit('/');
  
      cy.contains('Start Quiz').click();
  
      for (let i = 0; i < 2; i++) {
        cy.get('button').first().click();
      }
  
      cy.contains('Your Score:').should('exist');
      cy.contains('Restart Quiz').click();
      cy.contains('Start Quiz').should('exist');
    });
  });
  