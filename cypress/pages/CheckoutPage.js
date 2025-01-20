class CheckoutPage {
    elements = {
        firstNameInput: () => cy.get('#first-name'),
        lastNameInput: () => cy.get('#last-name'),  
        postalCodeInput: () => cy.get('#postal-code'),
        continueButton: () => cy.contains('CONTINUE')
    }

    fillFirstName(firstName) {
        this.elements.firstNameInput().type(firstName)
    }

    fillLastName(lastName) {
        this.elements.lastNameInput().type(lastName)
    }

    fillPostalCode(postalCode) {
        this.elements.postalCodeInput().type(postalCode)
    }

    clickContinueButton() {
        this.elements.continueButton().click()
    }

    fillCheckoutForm(firstName, lastName, postalCode) {
        this.fillFirstName(firstName)
        this.fillLastName(lastName)
        this.fillPostalCode(postalCode)
        this.clickContinueButton()
    }
}

export default new CheckoutPage()