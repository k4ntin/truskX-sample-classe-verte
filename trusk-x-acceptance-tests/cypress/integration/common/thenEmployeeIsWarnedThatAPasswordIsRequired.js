import { Then } from 'cypress-cucumber-preprocessor/steps';

Then(/^(.*) is warned that a password is required$/, async (employeeName) => {
  cy.get('#form-error').should('have.text', 'Mot de passe requis')
})
