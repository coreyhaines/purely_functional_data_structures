Feature: Updating Lists

  Scenario: Updating a single element list
    Given the list "1"
    When I update item 1 to "b"
    Then it should be "1, "

