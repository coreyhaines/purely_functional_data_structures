Feature: Lists

  Background: Set up the list
    Given an empty list

  Scenario: empty list is empty
    Then it should be empty

  Scenario: cons makes list not empty
    When I cons "1"
    Then it should not be empty
