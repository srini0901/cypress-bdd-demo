import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../support/page_objects/LoginPage";
import ProductsPage from "../../support/page_objects/ProductsPage";
import CartPage from "../../support/page_objects/CartPage";
import CheckoutPage from "../../support/page_objects/CheckOutPage";
import OrderConfirmationPage from "../../support/page_objects/OrderConfirmationPage";

const loginPage = new LoginPage();
const productsPage = new ProductsPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();
const orderConfirmationPage = new OrderConfirmationPage();

Given('I am logged in as a standard user', () => {
  loginPage.visit();
  loginPage.login('standard_user', 'secret_sauce');
});

When('I add the following products to the cart', (dataTable) => {
  dataTable.hashes().forEach(row => {
    productsPage.addProductToCart(row.product);
  });
  productsPage.clickCartButton();
});

When('I proceed to checkout', () => {
  cartPage.clickCheckoutButton();
});

When('I fill in my details with {string}, {string}, and {string}', (firstName, lastName, zipCode) => {
  checkoutPage.checkout(firstName,lastName,zipCode);
});

When('I complete the order', () => {
  checkoutPage.clickFinishButton();
});

Then('I should see the order confirmation page', () => {
  orderConfirmationPage.verifyOrderConfirmation();
});