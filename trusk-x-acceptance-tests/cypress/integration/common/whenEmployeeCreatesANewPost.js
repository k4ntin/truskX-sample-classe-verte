import { When } from 'cypress-cucumber-preprocessor/steps';

When(/^(.*) creates a new post$/, async function (context, employeeName) {
  cy.visit(Cypress.env('baseUrl') + '/posts/write')
  cy.get('input#title').type('Cypress is the best')
  cy.get('textarea#body').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed ultricies ipsum, nec aliquam libero. Donec sollicitudin, sapien a iaculis ultrices, dui tortor cursus sem, eget efficitur justo tellus quis lorem.')
  cy.get('#submit').click()
})
