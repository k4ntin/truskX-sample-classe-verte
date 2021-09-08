import { When } from 'cypress-cucumber-preprocessor/steps';

When(/^(.*) connects to TruskX without email$/, async function (context, employeeName) {
  cy.visit(Cypress.env('baseUrl'))
  cy.get('input#password').type(this.testEmployeePayload.password)
  cy.get('#submit').click()
})
