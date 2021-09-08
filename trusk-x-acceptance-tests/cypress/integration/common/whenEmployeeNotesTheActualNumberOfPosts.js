import { When } from 'cypress-cucumber-preprocessor/steps';

When(/^(.*) notes the actual number of posts$/, function (employeeName) {
  cy.get('.post-wrapper').then(
    (elements) => this.postsNumber = elements.length
  )
})