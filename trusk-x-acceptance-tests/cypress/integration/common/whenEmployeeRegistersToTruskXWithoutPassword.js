import { When } from 'cypress-cucumber-preprocessor/steps';

When(/^(.*) registers to TruskX without password$/, async function (context, employeeName) {
  cy.visit(Cypress.env('baseUrl') + '/signup')
  cy.get('input#name').type(this.testEmployeePayload.name)
  cy.get('input#email').type(this.testEmployeePayload.email)
  cy.get('#submit').click()
})
