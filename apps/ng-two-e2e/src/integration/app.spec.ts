// create a test spec containing this
describe('When reading the MY_VAR env variable', () => {
  it('should match the value in our cypress.env.json file: ' + Cypress.env('MY_VAR'), () => {
    cy.log('MY_VAR = ' + Cypress.env('MY_VAR'))
    expect(Cypress.env('MY_VAR')).to.eq(987);
  });
});

