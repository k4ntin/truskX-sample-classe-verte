import { Then } from 'cypress-cucumber-preprocessor/steps';

Then(/^(.*) is warned that a phone is required$/, async (employeeName) => {
  cy.get('#form-error').should('have.text', 'Téléphone requis')
})
