import { When } from 'cypress-cucumber-preprocessor/steps';

When(/^(.*) registers to TruskX without password$/, async function (employeeName) {
  cy.visit(Cypress.env('baseUrl') + '/signup')
  cy.get('input#name').type(this.testEmployeePayload.name)
  cy.get('input#email').type(this.testEmployeePayload.email)
  cy.get('input#phone').type(this.testEmployeePayload.phone)
  cy.get('#submit').click()
})
