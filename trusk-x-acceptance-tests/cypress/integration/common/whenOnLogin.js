import { When } from 'cypress-cucumber-preprocessor/steps';

When(/^(.*) is on login$/, (employeeName) => {
  cy.visit(Cypress.env('baseUrl') + '/login')
})