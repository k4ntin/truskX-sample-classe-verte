import { Then } from 'cypress-cucumber-preprocessor/steps';

Then(/^(.*) is warned that he is not registered$/, async (employeeName) => {
  cy.get('#form-error').should('have.text', 'Adresse e-mail non enregistrée')
})
