@logout
Feature: Employee logout

  @fea003
  Scenario: Employee logout
    Given Adrian is a registered employee
    And Adrian is connected to TruskX
    When Adrian is on posts list
    And Adrian logs out
    Then Adrian is redirected to login

  @fea003
  Scenario: Logged out employees have no access to app pages
    Given Adrian is a registered employee
    And Adrian is connected to TruskX
    When Adrian is on posts list
    And Adrian logs out
    Then Adrian cannot access posts list
    And Adrian cannot access post form
