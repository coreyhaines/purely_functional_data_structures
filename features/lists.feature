Feature: Lists

  Background: Set up the list
    Given an empty list

  Scenario: initializes empty
    Then it should be empty

  Scenario: single cons
    When I cons "1"
    Then it should be "[1]"
