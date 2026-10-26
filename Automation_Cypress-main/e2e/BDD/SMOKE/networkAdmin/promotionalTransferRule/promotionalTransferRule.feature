Feature: promotionalTransferRule

Pretups-15997 - loginUser
    (https://plan.comviva.com/browse/PRETUPS-00000)
    Add loginUser from super Admin
 
    # # # Author: Niharika Challa
    # # # Last Updated: 09/07/2024
    # # # Scenario_ID : TC_1
    #TAGS
    #version tags
    @0.00

    Scenario: To verify that user is able to add Promotional rules with defined for a date range or time range.
    Given     Launch the url
    When      Login with network Admin Credentials
    And       Navigate to Transfer Rule > Promotional
    And       click on Add Transfer Rule
    And       Choose Promotional level
    And       choose Domain,Category and Grade
    And       Choose Receiver Details
    And       Select Card Group Set
    And       Select Date Range from Calendar
    And       Select Date Range from Calendar
    And       Click on save button
    Then      click on confirm button


    # # # Author: Niharika Challa
    # # # Last Updated: 09/07/2024
    # # # Scenario_ID : TC_1
    #TAGS
    #version tags
    @0.00

    Scenario: To verify that network admin is able to modify promotional rule.
    Given     Launch the url
    When      Login with network Admin Credentials
    And       Navigate to Transfer Rule > Promotional
    And       Search by Grade
    And       choose Domain,Category and Grade in Filter
    And       Click on proceed button
    And       Click on Edit Button
    And       Add TimeStamp
    Then      click on done Button


    # # # Author: Niharika Challa
    # # # Last Updated: 09/07/2024
    # # # Scenario_ID : TC_1
    #TAGS
    #version tags
    @0.00

    Scenario: To verify that network admin is able to delete promotional rule.
    Given     Launch the url
    When      Login with network Admin Credentials
    And       Navigate to Transfer Rule > Promotional
    And       Search by Grade
    And       choose Domain,Category and Grade in Filter
    And       Click on proceed button   
    Then      click on delete button


