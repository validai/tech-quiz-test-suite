// Quiz.cy.jsx

/// <reference types="cypress" />
import React from 'react';
import Quiz from '../../../client/src/components/Quiz';
import { mount } from 'cypress/react';

describe('Quiz Component', () => {
  it('renders correctly', () => {
    mount(<Quiz />);
    cy.get('h1').should('exist');
  });
});
