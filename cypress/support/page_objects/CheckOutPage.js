class CheckoutPage {
    enterFirstName(firstName) {
      cy.get('[data-test="firstName"]').type(firstName);
    }
  
    enterLastName(lastName) {
      cy.get('[data-test="lastName"]').type(lastName);
    }
  
    enterZipCode(zipCode) {
      cy.get('[data-test="postalCode"]').type(zipCode);
    }
  
    clickContinueButton() {
      cy.get('[data-test="continue"]').click();
    }
  
    clickFinishButton() {
      cy.get('[data-test="finish"]').click();
    }
  }
  
  export default CheckoutPage;