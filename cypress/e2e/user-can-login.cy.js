describe('User can login to system', () => {
  //positif text case
  it('user can login with valid username and password', () => {
    cy.visit("http://localhost:8000/")
    //untuk menjalankan test cast pilih selector lalu diberi aksinya (misal click,type,dll)
    cy.get(':nth-child(2) > .form-control').type("superadmin@gmail.com")
    cy.get(':nth-child(3) > .form-control').type("password")
    cy.get('.btn').click()
    cy.get('.nav-link > .d-sm-none').should("have.text","Hi, SuperAdmin")
  })

  //negatif test case
  it('user cannot login with invalid username and wrong password', () => {
    //arrange
    cy.visit('http://127.0.0.1:8000/')
    //untuk menjalankan test cast pilih selector lalu diberi aksinya (misal click,type,dll)
    
    //act
    cy.get(':nth-child(2) > .form-control').type("superadmin@gmail.com")
    cy.get(':nth-child(3) > .form-control').type("password-salah")
    cy.get('.btn').click()
    //assert
    cy.get(".invalid-feedback").should(
      "have.text",
      "These credentials do not match our records."
    )
  })
  it('user cannot login with wrong username and valid password', () => {
    //arrange
    cy.visit("http://127.0.0.1:8000/")
    //untuk menjalankan test cast pilih selector lalu diberi aksinya (misal click,type,dll)
    
    cy.get(':nth-child(2) > .form-control').type("superadminsy@gmail.com")
    cy.get(':nth-child(3) > .form-control').type("password")
    cy.get('.btn').click()
    //assert
    cy.get(".invalid-feedback").should(
      "have.text",
      "These credentials do not match our records."
    )
  })

  it('user cannot login with empty username and correct password', () => {
    //arrange
    cy.visit("http://127.0.0.1:8000/")
    //untuk menjalankan test cast pilih selector lalu diberi aksinya (misal click,type,dll)
    
    cy.get(':nth-child(3) > .form-control').type("password")
    cy.get('.btn').click()
    //assert
    cy.get(".invalid-feedback").should(
      "have.text",
      "The email field is required."
    )
  })
  it('user cannot login with valid username and empty password', () => {
    //arrange
    cy.visit("http://127.0.0.1:8000/")
    //untuk menjalankan test cast pilih selector lalu diberi aksinya (misal click,type,dll)
    
    cy.get(':nth-child(2) > .form-control').type("superadmin@gmail.com")
    cy.get('.btn').click()
    //assert
    cy.get(".invalid-feedback").should(
      "have.text",
      "The password field is required."
    )
  })
})