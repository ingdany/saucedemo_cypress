import LoginPage from "../pages/LoginPage";
import InventoryPage from "../pages/InventoryPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import OverviewPage from "../pages/OverviewPage";
import FinishPage from "../pages/FinishPage";

describe("Sauce Demo E2E Test", () => {
    before(() => {
        
        cy.fixture('users.json').as("users");
        // cy.fixture('users.json').then((users) => {
            
        //     // user = users[0].username;
        //     // password = users[0].password;
        //     // cy.log("User: " + user, "Password: " + password);
            
        // })

        
    })

    it("Make a purchase of 2 items", () => {
        let userName = "";
        let password = "";
        cy.get("@users").then((users) => {
            userName = users.users[0].username;
            password = users.users[0].password;
            cy.log("User: " + userName, "Password: " + password);
            LoginPage.visit();
            LoginPage.login(userName, password);
        })
        
        InventoryPage.addProductToCart(0);
        InventoryPage.addProductToCart(1);
        InventoryPage.goToCart();

        CartPage.clickCheckoutButton();

        CheckoutPage.fillCheckoutForm("John", "Doe", "12345");

        OverviewPage.clickFinishButton();

        FinishPage.verifyConfirmation();
    });
});