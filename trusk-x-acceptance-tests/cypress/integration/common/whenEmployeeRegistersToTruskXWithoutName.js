import { When } from 'cypress-cucumber-preprocessor/steps';

When(/^(.*) registers to TruskX without name$/, async function (employeeName) {
  cy.visit(Cypress.env('baseUrl') + '/signup')
  cy.get('input#email').type(this.testEmployeePayload.email)
  cy.get('input#phone').type(this.testEmployeePayload.phone)
  cy.get('input#password').type(this.testEmployeePayload.password)
  cy.get('#submit').click()
})
