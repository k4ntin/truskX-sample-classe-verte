import { When } from 'cypress-cucumber-preprocessor/steps';

When(/^(.*) clicks on signup button$/, (employeeName) => {
  cy.get('#signup').click()
})