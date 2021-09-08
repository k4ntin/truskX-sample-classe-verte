import { Then } from 'cypress-cucumber-preprocessor/steps';

Then(/^(.*) is redirected to signup$/, async (employeeName) => {
  cy.url().should('eq', Cypress.env('baseUrl') + '/signup')
  cy.get('#name').should('be.visible')
  cy.get('#email').should('be.visible')
  cy.get('#password').should('be.visible')
})
