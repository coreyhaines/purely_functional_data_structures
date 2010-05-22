Feature: Lists

  Background: Set up the list
    Given an empty list

  Scenario: empty list is empty
    Then it should be empty

  Scenario: cons makes list not empty
    When I cons "1"
    Then it should not be empty

  Scenario: head returns what was just cons-ed
    When I cons "a"
    Then the head should be "a"
