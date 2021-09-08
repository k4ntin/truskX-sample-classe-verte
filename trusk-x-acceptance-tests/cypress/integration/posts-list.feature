@posts @list
Feature: Posts list

  @fea005
  Scenario: Employee access to posts list
    Given Adrian is a registered employee
    And Adrian is connected to TruskX
    When Adrian is on posts list
    Then Adrian could see all posts

  @fea005
  Scenario: Employee posts list real time refresh
    Given Adrian is a registered employee
    And Adrian is connected to TruskX
    When Adrian is on posts list
    And Adrian notes the actual number of posts
    And Someone else creates a new post
    Then Adrian could immediatly see a new post