import randomstring from 'randomstring'
import { Given } from 'cypress-cucumber-preprocessor/steps';

Given(/^(.*) is a registered employee$/, async function (employeeName) {
  const randomLastName = randomstring.generate({
    length: 6,
    charset: 'alphabetic'
  })
  const randomLastNameCapitalized = randomLastName.charAt(0).toUpperCase() + randomLastName.slice(1)
  const employeeCompleteName = `${employeeName} ${randomLastNameCapitalized}`
  const employeeEmail = `${employeeCompleteName.toLowerCase().replace(' ', '.')}@trusk.com`
  const employeeBody = {
    name: employeeCompleteName,
    email: employeeEmail,
    password: 'password'
  }
  const createEmployeeUrl = `${Cypress.env('apiBaseUrl')}/employees`
  cy.request('POST', createEmployeeUrl, employeeBody)
  this.testEmployeePayload = employeeBody
})
