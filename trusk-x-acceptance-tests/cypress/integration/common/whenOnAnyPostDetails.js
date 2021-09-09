import { When } from 'cypress-cucumber-preprocessor/steps';

When(/^(.*) is on any post details$/, (employeeName) => {
  cy.request('GET', `${Cypress.env('apiBaseUrl')}/posts`).then(response => {
    const {body: posts} = response
    const max = posts.length
    const anyPostIndex = Math.floor(Math.random() * max)
    const anyPost = posts[anyPostIndex]
    cy.visit(Cypress.env('baseUrl') + '/posts/details/' + anyPost._id)
  })
})