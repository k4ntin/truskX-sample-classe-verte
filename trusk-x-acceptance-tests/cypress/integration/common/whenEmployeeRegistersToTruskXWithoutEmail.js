import { When } from 'cypress-cucumber-preprocessor/steps';

When(/^(.*) registers to TruskX without email$/, async function (context, employeeName) {
  cy.visit(Cypress.env('baseUrl') + '/signup')
  cy.get('input#name').type(this.testEmployeePayload.name)
  cy.get('input#password').type(this.testEmployeePayload.password)
  cy.get('#submit').click()
})
