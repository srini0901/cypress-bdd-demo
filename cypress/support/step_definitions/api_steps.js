import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I make a GET request to {string}', (url) => {
  cy.request({
    method: 'GET',
    url: `${Cypress.env('apiUrl')}${url}`
  }).as('getResponse'); // Define alias here
});

Given('I make a POST request to {string} with body:', (url, requestBody) => {
  cy.request({
    method: 'POST',
    url: `${Cypress.env('apiUrl')}${url}`,
    body: JSON.parse(requestBody)
  }).as('postResponse'); // Define alias here
});

Then('the API responds with a status code {int}', (statusCode) => {
  cy.get('@getResponse').its('status').should('eq', statusCode); // Use alias here
});

Then('the response body has {int} posts', (numberOfPosts) => {
  cy.get('@getResponse').its('body').should('have.length', numberOfPosts); // Use alias here
});

Then('the API responds with a status code {int} for POST request', (statusCode) => {
  cy.get('@postResponse').its('status').should('eq', statusCode); // Use alias here
});

Then('the response body has the new post details', () => {
  cy.get('@postResponse').then((response) => { // Use alias here
    expect(response.status).to.eq(201);
    expect(response.body).to.have.property('id');
    expect(response.body.title).to.eq('foo');
    expect(response.body.body).to.eq('bar');
    expect(response.body.userId).to.eq(1);
  });
});