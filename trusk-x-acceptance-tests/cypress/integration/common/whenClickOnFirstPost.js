import { When } from 'cypress-cucumber-preprocessor/steps';

When(/^(.*) clicks on first post$/, (employeeName) => {
  cy.get('#posts-wrapper').find('.post-wrapper').first().click()
})