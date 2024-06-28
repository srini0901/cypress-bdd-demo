class OrderConfirmationPage {
    verifyOrderConfirmation() {
      cy.get('.complete-header').should('contain.text', 'THANK YOU FOR YOUR ORDER');
    }
  }
  
  export default OrderConfirmationPage;