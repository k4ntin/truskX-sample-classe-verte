import { Given } from 'cypress-cucumber-preprocessor/steps';

Given(/^(.*) is connected to TruskX$/, async function (employeeName) {
  cy.request('POST', Cypress.env('apiBaseUrl') + '/employees/auth/login', this.testEmployeePayload)
    .then((response) => {
      const token = response.body.token
      localStorage.setItem('token', token)
    })
})
