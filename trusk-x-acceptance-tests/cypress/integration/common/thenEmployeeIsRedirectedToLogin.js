import { Then } from 'cypress-cucumber-preprocessor/steps';

Then(/^(.*) is redirected to login$/, async (employeeName) => {
  cy.url().should('eq', Cypress.env('baseUrl') + '/login')
  cy.get('#email').should('be.visible')
  cy.get('#password').should('be.visible')
})
