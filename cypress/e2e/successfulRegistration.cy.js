/// <reference types="cypress" />

describe('User Registration', () => {
  before(() => {
    cy.visit('/register', { failOnStatusCode: false })
  })

  it('Should allow successful registration and display the completion message', () => {
      cy.selectGender('male')
      cy.fillTextField('FirstName', 'Mikael')
      cy.fillTextField('LastName', 'Ferreira')
      cy.selectDateOfBirth('4', '1', '1993')
      cy.fillTextField('Email', 'mikaelluizqa@gmail.com')
      cy.fillTextField('Company', 'QualityMap')
      cy.checkNewsletter()
      cy.fillTextField('Password', 'Teste123')
      cy.fillTextField('ConfirmPassword', 'Teste123')
      cy.submitRegistration()

      // Eu pretendia realizar uma validação final, mas o processo é interrompido por um CAPTCHA, o qual não é possível contornar.

      // cy.get('.page-body').within(() => {
      //   cy.get('.result').should('contain.text', 'Your registration completed');
      // });
  });
});