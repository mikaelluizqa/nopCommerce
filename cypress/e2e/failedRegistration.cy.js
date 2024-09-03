/// <reference types="cypress" />

describe('User Registration Error Messages', () => {
  before(() => {
    cy.visit('/register?returnUrl=%2F', { failOnStatusCode: false })
  })

  it('Should display all error messages when required fields are empty', () => {
   
    cy.submitRegistration()
    
     const errorMessages = [
      'First name is required.',
      'Last name is required.',
      'Email is required.',
      'Password is required.'
    ]

    cy.get('.inputs').find('.field-validation-error').each(($el) => {
     const errorMessage = $el.text().trim()
     cy.wrap(errorMessages).should('include', errorMessage)
    });
  });
});