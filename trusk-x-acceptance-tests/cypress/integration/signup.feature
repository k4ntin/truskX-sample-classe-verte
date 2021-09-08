@signup @nr
Feature: Employee signup

  @fea001
  Scenario: Employee signup success
    Given Adrian is an employee
    When Adrian registers to TruskX
    Then Adrian is redirected to posts list

  @fea001
  Scenario: Registered employee signup failure
    Given Adrian is a registered employee
    When Adrian registers to TruskX
    Then Adrian is not redirected to posts list
    And Adrian is still on signup
    And Adrian is warned that his email is already registered

  @fea001
  Scenario: Employee signup without name failure
    Given Adrian is an employee
    When Adrian registers to TruskX without name
    Then Adrian is not redirected to posts list
    And Adrian is still on signup
    And Adrian is warned that a name is required

  @fea001
  Scenario: Employee signup without email failure
    Given Adrian is an employee
    When Adrian registers to TruskX without email
    Then Adrian is not redirected to posts list
    And Adrian is still on signup
    And Adrian is warned that an email is required

  @fea001
  Scenario: Employee signup without password failure
    Given Adrian is an employee
    When Adrian registers to TruskX without password
    Then Adrian is not redirected to posts list
    And Adrian is still on signup
    And Adrian is warned that a password is required

  @fea001
  Scenario: From signup employees could go to login
    When Someone is on signup
    And Someone clicks on login button
    Then Someone is redirected to login
