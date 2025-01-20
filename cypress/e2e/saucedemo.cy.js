import LoginPage from "../pages/LoginPage";
import InventoryPage from "../pages/InventoryPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import OverviewPage from "../pages/OverviewPage";
import FinishPage from "../pages/FinishPage";

describe("Sauce Demp E2E Test", () => {
    it("Login ", () => {
        LoginPage.visit();
        LoginPage.login("standard_user", "secret_sauce");

        InventoryPage.addProductToCart(0);
        InventoryPage.addProductToCart(1);
        InventoryPage.goToCart();

        CartPage.clickCheckoutButton();

        CheckoutPage.fillCheckoutForm("John", "Doe", "12345");

        OverviewPage.clickFinishButton();

        FinishPage.verifyConfirmation();
    });
});