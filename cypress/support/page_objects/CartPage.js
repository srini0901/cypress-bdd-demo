
class CartPage {
    clickCheckoutButton() {
      cy.xpath('//a[@class="btn_action checkout_button"]').click();
    }
  }
  
  export default CartPage;