class ProductsPage {
    addProductToCart(productName) {
      cy.contains(productName).parents('.inventory_item').find('button').click();
    }
  
    clickCartButton() {
      cy.get('.shopping_cart_link').click();
    }
  
    verifyIsVisible() {
      cy.url().should('include', '/inventory.html');
      cy.get('.inventory_list').should('be.visible');
    }
  }
  
  export default ProductsPage;