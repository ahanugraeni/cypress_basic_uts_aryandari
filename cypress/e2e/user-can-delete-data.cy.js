describe('delete data', () => {
  // before(()=>{
  //   cy.log("run before all test case")
  // })
  // after(()=>{
  //   cy.log("run after all test case")
  // })

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

  //positif test case 1
  it('user can delete data', () => {
  //cy.get
  //merapikan selector
  cy.get('.table td')
  .contains('user')
  .parent()
  .find('button')
  .contains('Delete')
  .click()
  //make sure sweet alert visible
  cy.get('.swal-button-container').find('button').contains('OK').click()
  cy.get('.alert').should('be.visible')
    .and('have.class', 'alert-success')
    .contains('User Deleted Successfully')
  cy.get('.table').should('not.contain', 'user')
    /* ==== Generated with Cypress Studio ==== */
    // cy.get(':nth-child(3) > .text-right > .d-flex > .ml-2 > .btn').click();
    // cy.get(':nth-child(2) > .swal-button').click();
    // cy.get('p').should('be.visible');
    // cy.get('.alert')
    // .should('be.visible')
    // .and('have.class', 'alert-success')
    // .contains ('User Deleted Successfully');
    /* ==== End Cypress Studio ==== */
  })

  //test case 2
  it('user can cancel delete data', () => {
    //merapikan selector
    cy.get('.table td')
    .contains('user')
    .parent()
    .find('button')
    .contains('Delete')
    .click()
    //make sure sweet alert visible
    cy.get('.swal-button-container').find('button').contains('Cancel').click()
    cy.get('.table td').contains('user').should('be.visible')
    
    
    // //arrange
    // cy.get(':nth-child(3) > .text-right > .d-flex > .ml-2 > .btn').click();
    // //act
    // //assert
    // /* ==== Generated with Cypress Studio ==== */
    // cy.get(':nth-child(1) > .swal-button').click();
    // cy.get('.table > tbody > :nth-child(3) > :nth-child(2)').contains('user');
    // /* ==== End Cypress Studio ==== */
  })

  //test case 3
  it('dummy test', () => {
    //arrange
    //act
    //assert
  })
})