import { Then } from 'cypress-cucumber-preprocessor/steps';

Then(/^(.*) could immediatly see a new post$/, function (employeeName){
  setTimeout(() => {
    cy.get('.post-wrapper').then(
      (elements) =>   expect(this.postsNumber).to.be.lessThan(elements.length)
    )
  }, 500)
})
