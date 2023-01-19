describe('template spec', () => {
  // Negatif Case
  it('Login With Wrong Username', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('username salah')
    cy.wait(3)
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.fa').click()
  })

  // Negatif Case
  it('Login With Wrong Password', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('tomsmith')
    cy.wait(3)
    cy.get('#password').type('passwordSALAH')
    cy.get('.fa').click()
  })

  // Negatif Case
  it('Login With Space Username & Password', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type(' ')
    cy.wait(3)
    cy.get('#password').type(' ')
    cy.get('.fa').click()
  })

  // Positif Case
  it('Success Login', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('tomsmith')
    cy.wait(3)
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.fa').click()
  })
})