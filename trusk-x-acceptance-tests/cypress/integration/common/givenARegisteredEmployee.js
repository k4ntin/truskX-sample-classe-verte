import { Given } from 'cypress-cucumber-preprocessor/steps';

import getRdmEmployeePayload from "../../support/getRdmEmployeePayload";

Given(/^(.*) is a registered employee$/, async function (employeeName) {
  const testEmployeePayload = getRdmEmployeePayload(employeeName)
  const createEmployeeUrl = `${Cypress.env('apiBaseUrl')}/employees`
  cy.request('POST', createEmployeeUrl, testEmployeePayload)
  this.testEmployeePayload = testEmployeePayload
})
