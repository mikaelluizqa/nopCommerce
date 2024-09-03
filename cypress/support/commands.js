Cypress.Commands.add('selectGender', (gender) => {
    cy.get(`input[id="gender-${gender.toLowerCase()}"]`).check()
})

Cypress.Commands.add('fillTextField', (fieldId, value) => {
    cy.get(`#${fieldId}`).type(value)
});

Cypress.Commands.add('selectDateOfBirth', (day, monthValue, year) => {
    cy.get('select[name="DateOfBirthDay"]').select(day).should('have.value', day)
    cy.get('select[name="DateOfBirthMonth"]').select(monthValue).should('have.value', monthValue)
    cy.get('select[name="DateOfBirthYear"]').select(year).should('have.value', year)
});

Cypress.Commands.add('checkNewsletter', () => {
    cy.get('#Newsletter').check()
});

Cypress.Commands.add('submitRegistration', () => {
    cy.get('#register-button').click()
});