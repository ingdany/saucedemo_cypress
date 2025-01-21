import LoginPage from "../pages/LoginPage";
import InventoryPage from "../pages/InventoryPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import OverviewPage from "../pages/OverviewPage";
import FinishPage from "../pages/FinishPage";

describe("Sauce Demo E2E Test", () => {
    before(() => {
        cy.fixture('customer.json').as("customer");
    })

    it("Make a purchase of 2 items", () => {
        const userName = Cypress.env("username");
        const password = Cypress.env("password");
        cy.log("User: " + userName, "Password: " + password);
        LoginPage.visit();
        LoginPage.login(userName, password);
        
        InventoryPage.addProductToCart(0);
        InventoryPage.addProductToCart(1);
        InventoryPage.goToCart();

        CartPage.clickCheckoutButton();

        cy.get("@customer").then((customer) => {
            const firstname = customer.customers[0].name;
            const lastName = customer.customers[0].lastName;
            const zipCode = customer.customers[0].zipCode;
            CheckoutPage.fillCheckoutForm(firstname, lastName, zipCode);
        })

        OverviewPage.clickFinishButton();

        FinishPage.verifyConfirmation();
    });
});