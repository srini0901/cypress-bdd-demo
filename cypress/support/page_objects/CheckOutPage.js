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
      cy.get('[value="CONTINUE"]').click();
    }
  
    clickFinishButton() {
      cy.get('[class="btn_action cart_button"]').click();
    }

    checkout(firstName,lastName,zipCode){
      this.enterFirstName(firstName);
      this.enterLastName(lastName);
      this.enterZipCode(zipCode);
      this.clickContinueButton();
    }
  }
  
  export default CheckoutPage;