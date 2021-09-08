import { Then } from 'cypress-cucumber-preprocessor/steps';

Then(/^(.*) is warned that his password is not correct$/, async (employeeName) => {
  cy.get('#form-error').should('have.text', 'Mauvais mot de passe')
})
