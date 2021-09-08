import { Then } from 'cypress-cucumber-preprocessor/steps';

Then(/^(.*) is still on login$/, async (employeeName) => {
  cy.url().should('eq', Cypress.env('baseUrl') + '/login')
  cy.get('input#email').should('be.visible')
  cy.get('input#password').should('be.visible')
})
