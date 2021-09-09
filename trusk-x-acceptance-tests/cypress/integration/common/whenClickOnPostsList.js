import { When } from 'cypress-cucumber-preprocessor/steps';

When(/^(.*) clicks on posts list$/, (employeeName) => {
  cy.get('#posts-list').first().click()
})