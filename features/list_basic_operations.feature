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

  Scenario: empty list has undefined head
    Then the head should be undefined

  Scenario: empty list has undefined tail
    Then the tail should be undefined

  Scenario: cons-ed list has empty tail
    When I cons "foo"
    Then the tail should be empty

  Scenario: getting the head of the tail
    When I cons "foo"
    And I cons "bar"
    Then the head of the tail should be "foo"

  Scenario: toString for single element
    When I cons "foo"
    Then it should be "foo, "
