Feature: 001_Login_Feature

  Scenario: Successful login
    Given I visit the Sauce Demo login page
    When I enter valid credentials
    And I click the login button
    Then I should see the products page

  Scenario: Unsuccessful login
    Given I visit the Sauce Demo login page
    When I enter invalid credentials
    And I click the login button
    Then I should see an error message