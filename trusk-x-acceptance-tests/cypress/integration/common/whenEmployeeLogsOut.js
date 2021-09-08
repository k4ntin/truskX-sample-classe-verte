import { When } from 'cypress-cucumber-preprocessor/steps';

When(/^(.*) logs out$/, (employeeName) => {
  cy.get('#logout').click()
})