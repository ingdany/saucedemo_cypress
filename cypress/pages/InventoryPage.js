class InventoryPage {
    elements = {
        addToCartButtons: () => cy.get('button.btn_primary.btn_inventory'),
        shoppingCartLink: () => cy.get('#shopping_cart_container a')
    }
    
    addProductToCart(index) {
        this.elements.addToCartButtons().eq(index).click()
    }

    goToCart() {
        this.elements.shoppingCartLink().click()
    }
}

export default new InventoryPage()