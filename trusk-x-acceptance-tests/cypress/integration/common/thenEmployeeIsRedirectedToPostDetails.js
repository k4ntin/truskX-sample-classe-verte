import { Then } from 'cypress-cucumber-preprocessor/steps';

Then(/^(.*) is redirected to post details$/, async (employeeName) => {
  cy.url().should('include', Cypress.env('baseUrl') + '/posts/details/')
  cy.get('#post-details').should('be.visible')
})
