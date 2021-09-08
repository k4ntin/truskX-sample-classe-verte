import { When } from 'cypress-cucumber-preprocessor/steps';

When(/^(.*) connects to TruskX without password$/, async function (context, employeeName) {
  cy.visit(Cypress.env('baseUrl'))
  cy.get('input#email').type(this.testEmployeePayload.email)
  cy.get('#submit').click()
})
