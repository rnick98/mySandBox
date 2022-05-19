import LoginPage from '../pages/loginPage'

Cypress.Commands.add('login', (user) => {
    cy.visit('/')
    LoginPage.login(user)
})
