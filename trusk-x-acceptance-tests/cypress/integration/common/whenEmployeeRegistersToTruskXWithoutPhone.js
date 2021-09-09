import { When } from 'cypress-cucumber-preprocessor/steps';

When(/^(.*) registers to TruskX without phone$/, async function (employeeName) {
  cy.visit(Cypress.env('baseUrl') + '/signup')
  cy.get('input#name').type(this.testEmployeePayload.name)
  cy.get('input#email').type(this.testEmployeePayload.email)
  cy.get('input#password').type(this.testEmployeePayload.password)
  cy.get('#submit').click()
})
