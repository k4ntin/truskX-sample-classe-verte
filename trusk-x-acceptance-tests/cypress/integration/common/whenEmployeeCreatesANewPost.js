import { When } from 'cypress-cucumber-preprocessor/steps';

When(/^(.*) creates a new post$/, async function (employeeName) {
  if (employeeName === 'Someone else') {
    cy.request(Cypress.env('apiBaseUrl') + '/employees').then((response) => {
      const someoneElse = response.body[0]._id
      cy.request('POST', Cypress.env('apiBaseUrl') + '/posts', {
        title: 'Cypress is worst on backend',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed ultricies ipsum, nec aliquam libero. Donec sollicitudin, sapien a iaculis ultrices, dui tortor cursus sem, eget efficitur justo tellus quis lorem.',
        author: someoneElse
      })
    })
  } else {
    cy.visit(Cypress.env('baseUrl') + '/posts/write')
    cy.get('input#title').type('Cypress is the best')
    cy.get('textarea#body').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed ultricies ipsum, nec aliquam libero. Donec sollicitudin, sapien a iaculis ultrices, dui tortor cursus sem, eget efficitur justo tellus quis lorem.')
    cy.get('#submit').click()
  }
})
