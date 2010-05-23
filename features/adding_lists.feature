Feature: Adding Lists Together

  Background: Set up the lists
    Given an empty list "list1"
    And an empty list "list2"

  Scenario: first list is empty yields second list
    When I cons "2" to "list2"
    And I add "list1" and "list2"
    Then the sum should equal "list2"

  Scenario: second list is empty yields first list
    When I cons "2" to "list1"
    And I add "list1" and "list2"
    Then the sum should equal "list1"

  Scenario: Adding single-element list
    When I cons "1" to "list1"
    And I cons "2" to "list2"
    And I add "list1" and "list2"
    Then the head of the sum equals the head of "list1"
    Then the tail of the sum equals "list2"

  Scenario: Multiple element lists
    When I cons "2" to "list1"
    And I cons "1" to "list1"
    And I cons "3" to "list2"
    And I add "list1" and "list2"
    Then the head of the sum is "1"
    And the head of the tail of the sum is "2"
    And the head of the tail of the tail of the sum is "3"

