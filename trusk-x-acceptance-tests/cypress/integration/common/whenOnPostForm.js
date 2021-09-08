import { When } from 'cypress-cucumber-preprocessor/steps';

When(/^(.*) is on post form$/, (employeeName) => {
  cy.visit(Cypress.env('baseUrl') + '/posts/write')
})