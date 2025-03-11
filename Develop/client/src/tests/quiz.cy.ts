/// <reference types="cypress" />
describe("Tech Quiz Flow", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("starts the quiz when clicking the start button", () => {
    cy.get('[data-testid="start-button"]').click();
    cy.get('[data-testid="quiz-question"]').should("be.visible");
  });

  it("allows the user to answer questions", () => {
    cy.get('[data-testid="start-button"]').click();
    cy.get('[data-testid="option-1"]').click();
    cy.get('[data-testid="next-button"]').click();
    cy.get('[data-testid="option-2"]').click();
  });

  it("shows the final score after completing the quiz", () => {
    cy.get('[data-testid="start-button"]').click();
    for (let i = 1; i <= 10; i++) {
      cy.get('[data-testid="option-1"]').click();
      cy.get('[data-testid="next-button"]').click();
    }
    cy.get('[data-testid="final-score"]').should("be.visible");
  });
});
