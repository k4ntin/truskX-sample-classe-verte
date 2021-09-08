import { Then } from 'cypress-cucumber-preprocessor/steps';

Then(/^(.*) is redirected to posts list$/, async (employeeName) => {
  cy.url().should('eq', Cypress.env('baseUrl') + '/posts')
  cy.get('#posts-wrapper').should('be.visible')
})
