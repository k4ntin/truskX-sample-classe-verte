@posts @form
Feature: Post form

  @fea003 @nr
  Scenario: Registered employee create post success
    Given Adrian is a registered employee
    And Adrian is connected to TruskX
    When Adrian creates a new post
    Then Adrian is redirected to posts list

  @fea003 @nr
  Scenario: Registered employee create post without title failure
    Given Adrian is a registered employee
    And Adrian is connected to TruskX
    When Adrian creates a new post without title
    Then Adrian is not redirected to posts list
    And Adrian is still on post form
    And Adrian is warned that a title is required

  @fea003 @nr
  Scenario: Registered employee create post without body failure
    Given Adrian is a registered employee
    And Adrian is connected to TruskX
    When Adrian creates a new post without body
    Then Adrian is not redirected to posts list
    And Adrian is still on post form
    And Adrian is warned that a body is required

  @fea002 @nr
  Scenario: From post form employees could go to posts list
    Given Adrian is a registered employee
    And Adrian is connected to TruskX
    When Adrian is on post form
    And Someone clicks on cancel button
    Then Someone is redirected to posts list