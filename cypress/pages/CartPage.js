class CartPage {
    elements = {        
        // checkoutButton: () => cy.get('.checkout_button')
        checkoutButton: () => cy.contains('CHECKOUT')
    }

    clickCheckoutButton() {
        this.elements.checkoutButton().click()
    }
}

export default new CartPage()