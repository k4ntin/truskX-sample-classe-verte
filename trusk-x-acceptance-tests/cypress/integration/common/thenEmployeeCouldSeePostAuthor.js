import { Then } from 'cypress-cucumber-preprocessor/steps';

Then(/^(.*) could see post author$/, async (employeeName) => {
    cy.get('#post-author').should('be.visible')
})
