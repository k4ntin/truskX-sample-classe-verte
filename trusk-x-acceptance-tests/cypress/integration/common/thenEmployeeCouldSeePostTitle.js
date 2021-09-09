import { Then } from 'cypress-cucumber-preprocessor/steps';

Then(/^(.*) could see post title$/, async (employeeName) => {
    cy.get('#post-title').should('be.visible')
})
