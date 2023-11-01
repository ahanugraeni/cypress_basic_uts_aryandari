describe('user can login logout', () => {
  it('user can login and logout', () => {
    cy.visit('http://127.0.0.1:8000/')
    cy.get('[data-id="email"]').type("superadmin@gmail.com")
    cy.get('[data-id="password"]').type("password")
    cy.get('[data-id="submit"]').click()
    cy.get('[data-id="username"]').click()
    cy.get('[data-id="logout-btn"]').click()
    /* ==== Generated with Cypress Studio ==== */
    // cy.get('h4').click();
    // cy.get(':nth-child(2) > .form-control').clear('superadmin@gmail.com');
    // cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    // cy.get(':nth-child(3) > .form-control').clear('p');
    // cy.get(':nth-child(3) > .form-control').type('password');
    // cy.get('.btn').click();
    // cy.get('.navbar-right > :nth-child(2) > .nav-link').click();
    // cy.get('.text-danger').click();
    /* ==== End Cypress Studio ==== */
  })
  //kuis
  it('user can search user', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000/')
    cy.get('[data-id="email"]').type("superadmin@gmail.com")
    cy.get('[data-id="password"]').type("password")
    cy.get('[data-id="submit"]').click()
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://127.0.0.1:8000/user-management/user')
    //act
    cy.get('.search').click();
    cy.get('#name').type('user');
    cy.get('#search > .text-right > .btn-primary').click();
    //assert
    cy.get('.table').should('be.visible');
    /* ==== End Cypress Studio ==== */
  })
})