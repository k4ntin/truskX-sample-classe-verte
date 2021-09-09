import { Given } from 'cypress-cucumber-preprocessor/steps';

import getRdmEmployeePayload from "../../support/getRdmEmployeePayload";

Given(/^(.*) is not a registered employee$/, async function (employeeName) {
  this.testEmployeePayload = getRdmEmployeePayload(employeeName)
})
