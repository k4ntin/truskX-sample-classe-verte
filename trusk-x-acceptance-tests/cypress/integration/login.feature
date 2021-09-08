@login
Feature: Employee login

  @fea001 @nr
  Scenario: Registered employee login success
    Given Adrian is a registered employee
    When Adrian connects to TruskX
    Then Adrian is redirected to posts list

  @enh001 @nr
  Scenario: Registered employee login with bad password failure
    Given Adrian is a registered employee
    When Adrian connects to TruskX with a bad password
    Then Adrian is not redirected to posts list
    And Adrian is still on login
    And Adrian is warned that his password is not correct

  @enh002 @nr
  Scenario: Unregistered employee login failure
    Given Adrian is not a registered employee
    When Adrian connects to TruskX
    Then Adrian is not redirected to posts list
    And Adrian is still on login
    And Adrian is warned that he is not registered

  @enh003 @nr
  Scenario: Login without email failure
    When Someone connects to TruskX without email
    Then Adrian is not redirected to posts list
    And Adrian is still on login
    And Adrian is warned that an email is required

  @enh004 @nr
  Scenario: Login without password failure
    When Someone connects to TruskX without password
    Then Adrian is not redirected to posts list
    And Adrian is still on login
    And Adrian is warned that a password is required
