Feature: Checkout

  Scenario Outline: Add products to cart and complete checkout
    Given I am logged in as a standard user
    When I add the following products to the cart
      | product                  |
      | Sauce Labs Bike Light    |
      | Sauce Labs Bolt T-Shirt  |
      | Sauce Labs Onesie        |
    And I proceed to checkout
    And I fill in my details with "<firstName>", "<lastName>", and "<zipCode>"
    And I complete the order
    Then I should see the order confirmation page

    Examples:
      | firstName | lastName | zipCode |
      | John      | Doe      | 12345   |
      | Jane      | Smith    | 54321   |