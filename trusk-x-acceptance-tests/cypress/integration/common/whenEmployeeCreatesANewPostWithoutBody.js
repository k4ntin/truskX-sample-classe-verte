import { When } from 'cypress-cucumber-preprocessor/steps';

When(/^(.*) creates a new post without body$/, async function (context, employeeName) {
  cy.visit(Cypress.env('baseUrl') + '/posts/write')
  cy.get('input#title').type('Cypress is the best')
  cy.get('#submit').click()
})
