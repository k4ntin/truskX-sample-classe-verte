import { Then } from 'cypress-cucumber-preprocessor/steps';

Then(/^(.*) is warned that his email is invalid$/, async (employeeName) => {
  cy.get('#form-error').should('have.text', 'Adresse e-mail invalide')
})
