class LoginPage {
    visit() {
      cy.visit('/');
    }
  
    enterUsername(username) {
      cy.get('#user-name').type(username);
    }
  
    enterPassword(password) {
      cy.get('#password').type(password);
    }
  
    clickLoginButton() {
      cy.get('#login-button').click();
    }
  
    verifyErrorMessage(message) {
      cy.get('[data-test="error"]').should('contain.text', message);
    }
  }
  
  export default LoginPage;