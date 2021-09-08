import { Then } from 'cypress-cucumber-preprocessor/steps';

Then(/^(.*) could see all posts$/, async (employeeName) => {
  cy.get('#posts-wrapper').should('be.visible')
  cy.get('.post-wrapper').each(($post, index, $posts) => {
    cy.get($post).get('.post-title').should('be.visible')
    cy.get($post).get('.post-author').should('be.visible')
    cy.get($post).get('.post-date').should('be.visible')
  })
})
