import { When } from 'cypress-cucumber-preprocessor/steps';

When(/^(.*) is on signup$/, (employeeName) => {
  cy.visit(Cypress.env('baseUrl') + '/signup')
})