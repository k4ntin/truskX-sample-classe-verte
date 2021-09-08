import { Then } from 'cypress-cucumber-preprocessor/steps';

Then(/^(.*) cannot access posts list$/, async (employeeName) => {
  cy.visit(Cypress.env('baseUrl') + '/posts')
  cy.url().should('eq', Cypress.env('baseUrl') + '/login')
  cy.get('input#email').should('be.visible')
  cy.get('input#password').should('be.visible')
})
