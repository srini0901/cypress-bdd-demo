import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../support/page_objects/LoginPage";
import ProductsPage from "../../support/page_objects/ProductsPage";

const loginPage = new LoginPage();
const productsPage = new ProductsPage();

Given('I visit the Sauce Demo login page', () => {
  loginPage.visit();
});

When('I enter valid credentials', () => {
  loginPage.enterUsername('standard_user');
  loginPage.enterPassword('secret_sauce');
});

When('I enter invalid credentials', () => {
  loginPage.enterUsername('invalid_user');
  loginPage.enterPassword('invalid_password');
});

When('I click the login button', () => {
  loginPage.clickLoginButton();
});

Then('I should see the products page', () => {
  productsPage.verifyIsVisible();
});

Then('I should see an error message', () => {
  loginPage.verifyErrorMessage('Username and password do not match any user in this service');
});