import { When } from 'cypress-cucumber-preprocessor/steps';

When(/^(.*) clicks on login button$/, (employeeName) => {
  cy.get('#login').click()
})