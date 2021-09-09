@posts @details
Feature: Post details

    @fea006
    Scenario: From post details to posts list
        Given Adrian is a registered employee
        And Adrian is connected to TruskX
        And Adrian is on any post details
        When Adrian clicks on posts list
        Then Adrian is redirected to posts list

    @fea006
    Scenario: On post details employee could see all post details
        Given Adrian is a registered employee
        And Adrian is connected to TruskX
        When Adrian is on any post details
        Then Adrian could see post title
        Then Adrian could see post body
        Then Adrian could see post author
        Then Adrian could see post date