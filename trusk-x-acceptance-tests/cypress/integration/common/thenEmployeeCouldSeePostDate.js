import { Then } from 'cypress-cucumber-preprocessor/steps';

Then(/^(.*) could see post date$/, async (employeeName) => {
    cy.get('#post-date').should('be.visible')
})
