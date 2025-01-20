class OverviewPage {
    elements = {
        finishButton : () => cy.contains('FINISH')
    }

    clickFinishButton() {
        this.elements.finishButton().click()
    }
}   

export default new OverviewPage()