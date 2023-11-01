describe('User can open login page', () => {
  it('User can open login page', () => {
    cy.visit('http://127.0.0.1:8000/')
    cy.get('h4').should("contain", "Login")
  })
})