import { Then } from 'cypress-cucumber-preprocessor/steps';

Then(/^(.*) is still on signup$/, async (employeeName) => {
  cy.url().should('eq', Cypress.env('baseUrl') + '/signup')
  cy.get('input#name').should('be.visible')
  cy.get('input#email').should('be.visible')
  cy.get('input#password').should('be.visible')
})
