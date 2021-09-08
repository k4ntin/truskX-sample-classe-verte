import { Then } from 'cypress-cucumber-preprocessor/steps';

Then(/^(.*) is warned that an email is required$/, async (employeeName) => {
  cy.get('#form-error').should('have.text', 'Adresse e-mail requise')
})
