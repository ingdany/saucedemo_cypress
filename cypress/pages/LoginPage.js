class LoginPage {
    elements = {
        usernameInput: () => cy.get('[data-test="username"]'),
        passwordInput: () => cy.get('[data-test="password"]'),
        loginButton: () => cy.get('#login-button')
    }
    
    visit() {
        cy.visit('/index.html')
    }

    login(username, password) {
        this.elements.usernameInput().type(username)
        this.elements.passwordInput().type(password)
        this.elements.loginButton().click()
    }
}
export default new LoginPage()