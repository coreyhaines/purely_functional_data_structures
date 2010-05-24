Feature: Adding Lists

  Scenario: adding to an empty list yields second list
    Given an empty list "list1"
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
    Given "1,2" as "list1"
    Given "2,3" as "list2"
    When I add "list1" and "list2"
    Then the sum should be "1,2,2,3"

