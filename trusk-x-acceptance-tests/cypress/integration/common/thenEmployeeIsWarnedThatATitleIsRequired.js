import { Then } from 'cypress-cucumber-preprocessor/steps';

Then(/^(.*) is warned that a title is required$/, async (employeeName) => {
  cy.get('#form-error').should('have.text', 'Titre requis')
})
