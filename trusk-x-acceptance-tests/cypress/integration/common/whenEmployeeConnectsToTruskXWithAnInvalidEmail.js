import { When } from 'cypress-cucumber-preprocessor/steps';

When(/^(.*) connects to TruskX with an invalid email$/, async function (context, employeeName) {
  cy.visit(Cypress.env('baseUrl'))
  cy.get('input#email').type('adrian@gmail.com')
  cy.get('input#password').type(this.testEmployeePayload.password)
  cy.get('#submit').click()
})
