class FinishPage {
    elements = {
        confirmation : () => cy.contains('THANK YOU FOR YOUR ORDER')
    }
    verifyConfirmation() {
        this.elements.confirmation().should('be.visible')   
    }
}

export default new FinishPage()