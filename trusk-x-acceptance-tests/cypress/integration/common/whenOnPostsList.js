import { When } from 'cypress-cucumber-preprocessor/steps';

When(/^(.*) is on posts list$/, (employeeName) => {
  cy.visit(Cypress.env('baseUrl') + '/posts')
})