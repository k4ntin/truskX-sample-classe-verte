import { When } from 'cypress-cucumber-preprocessor/steps';

When(/^(.*) connects to TruskX$/, async function (employeeName) {
  cy.visit(Cypress.env('baseUrl'))
  cy.get('input#email').type(this.testEmployeePayload.email)
  cy.get('input#password').type(this.testEmployeePayload.password)
  cy.get('#submit').click()
})
