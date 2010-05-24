Feature: Creating a list from an array

  Scenario: Empty array yields empty list
    Given "" as a list
    Then it should be empty

  Scenario: Single element
    Given "1" as a list
    Then it should be "1, "

  Scenario: head is 1
    Given "1,2,3" as a list
    Then the head should be "1"

  Scenario: second item initialized
    Given "1,2,3" as a list
    Then the head of the tail should be "2"
