import { Then } from 'cypress-cucumber-preprocessor/steps';

Then(/^(.*) is not redirected to posts list$/, async (employeeName) => {
  cy.url().should('not.eq', Cypress.env('baseUrl') + '/posts')
  cy.get('#posts-wrapper').should('not.be.visible')
})
