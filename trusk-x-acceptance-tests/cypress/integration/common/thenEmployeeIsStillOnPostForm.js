import { Then } from 'cypress-cucumber-preprocessor/steps';

Then(/^(.*) is still on post form$/, async (employeeName) => {
  cy.url().should('eq', Cypress.env('baseUrl') + '/posts/write')
  cy.get('input#title').should('be.visible')
  cy.get('textarea#body').should('be.visible')
})
