import { Then } from 'cypress-cucumber-preprocessor/steps';

Then(/^(.*) could see post body$/, async (employeeName) => {
    cy.get('#post-body').should('be.visible')
})
