import { When } from 'cypress-cucumber-preprocessor/steps';

When(/^(.*) clicks on cancel button$/, (employeeName) => {
  cy.get('#cancel').click()
})