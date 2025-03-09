// Quiz.cy.jsx
import React from 'react';
import Quiz from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
  it('renders correctly', () => {
    cy.mount(<Quiz />);
    cy.get('h1').should('exist');
  });
});
