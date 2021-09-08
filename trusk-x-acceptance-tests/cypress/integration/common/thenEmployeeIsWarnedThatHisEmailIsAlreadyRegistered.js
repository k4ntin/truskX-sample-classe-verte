import { Then } from 'cypress-cucumber-preprocessor/steps';

Then(/^(.*) is warned that his email is already registered$/, async (employeeName) => {
  cy.get('#form-error').should('have.text', 'Adresse e-mail déjà enregistrée')
})
