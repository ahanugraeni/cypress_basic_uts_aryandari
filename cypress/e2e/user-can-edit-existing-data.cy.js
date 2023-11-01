describe('User Can Edit Existing Data', () => {
  afterEach(() => {
    cy.exec(
      "cd ../demo-app-cypress-automation && php artisan migrate:fresh --seed"
    )
  })

  //before each test case
  beforeEach(() => {
  //reset database command cypress
    cy.exec(
      "cd ../demo-app-cypress-automation && php artisan migrate:fresh --seed"
    )

    //arrange
    cy.visit('http://127.0.0.1:8000/')
    //act
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    cy.get(':nth-child(3) > .form-control').type('password');
    cy.get('.btn').click();
    cy.visit('http://127.0.0.1:8000/user-management/user')
  })

  //test case 1
  it('user can edit data', () => {
    //merapikan selector
    cy.get('.table td')
    .contains('user')
    .parent()
    .find('a')
    .contains('Edit')
    .click()
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#name').clear('user ');
    cy.get('#name').type('user edited');
    cy.get('.btn-primary').contains('Submit').click();
    cy.get('.table td').contains('user').should('have.text','user edited')
    /* ==== End Cypress Studio ==== */
    //assert
    cy.get('.alert').should('be.visible')
    .and('have.class', 'alert-success')
    .contains('User Berhasil Diupdate')
  })

  //challange
  it('user can edit user baru', () => {
    cy.get('.table td')
    .contains('user baru')
    .parent()
    .find('a')
    .contains('Edit')
    .click()
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#email').clear('polinema@gmail.com');
    cy.get('#email').type('update@gmail.com');
    cy.get('.btn-primary').contains('Submit').click();
    cy.get('.table td').contains('user baru').should('have.text','user baru')
    
    /* ==== End Cypress Studio ==== */
    //assert
    cy.get('.alert').should('be.visible')
    .and('have.class', 'alert-success')
    .contains('User Berhasil Diupdate')
  })
})