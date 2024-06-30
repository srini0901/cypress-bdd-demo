Feature: API Testing

  Scenario: GET request to fetch posts
    Given I make a GET request to "/posts"
    Then the API responds with a status code 200
    And the response body has 100 posts

  Scenario: POST request to create a new post
    Given I make a POST request to "/posts" with body:
      """
      {
        "title": "foo",
        "body": "bar",
        "userId": 1
      }
      """
    Then the API responds with a status code 201 for POST request
    And the response body has the new post details