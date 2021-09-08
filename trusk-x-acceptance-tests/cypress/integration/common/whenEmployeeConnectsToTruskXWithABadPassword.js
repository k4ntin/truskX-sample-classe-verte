import { When } from 'cypress-cucumber-preprocessor/steps';
import randomstring from 'randomstring';

When(/^(.*) connects to TruskX with a bad password$/, async function (context, employeeName) {
  const randomPassword = randomstring.generate({
    length: 6,
    charset: 'alphabetic'
  })
  cy.visit(Cypress.env('baseUrl'))
  cy.get('input#email').type(this.testEmployeePayload.email)
  cy.get('input#password').type(randomPassword)
  cy.get('#submit').click()
})
