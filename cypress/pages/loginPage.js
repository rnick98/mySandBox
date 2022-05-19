class LoginPage {
    constructor() {
        this.userNameInput = '[data-test="username"]'
        this.passwordInput = '[data-test="password"]'
        this.loginButton = '[id="login-button"]'
    }

    login(user) {
        cy.get(this.userNameInput).type(user.name)
        cy.get(this.passwordInput).type(user.password)
        cy.get(this.loginButton).click()
    }
}

export default new LoginPage()