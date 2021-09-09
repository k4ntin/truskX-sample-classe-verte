import { When } from 'cypress-cucumber-preprocessor/steps';

When(/^(.*) creates a new post without title$/, async function (employeeName) {
  cy.visit(Cypress.env('baseUrl') + '/posts/write')
  cy.get('textarea#body').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed ultricies ipsum, nec aliquam libero. Donec sollicitudin, sapien a iaculis ultrices, dui tortor cursus sem, eget efficitur justo tellus quis lorem.')
  cy.get('#submit').click()
})
