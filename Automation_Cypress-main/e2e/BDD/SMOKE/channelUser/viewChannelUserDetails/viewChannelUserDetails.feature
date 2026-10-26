Feature: viewChannelUserDetails

    Pretups- view Channel User Details
 
    # # # Author: Madhu Hema
    # # # Last Updated: 18/07/2024
    # # # Scenario_ID : TC_1
    #TAGS
    #version tags
    @0.00
 
    Scenario: TC_1 To verify that Channel User is able to view name, category, MSISDN, email id.
    Given Launch the url
    When Login with channel User Credentials
    And check that channel user name is visible
    And check that channel user category is visible
    And check that channel user mobile number is visible
    And check that channel user email is visible

 
    # # # Author: Madhu Hema
    # # # Last Updated: 18/07/2024
    # # # Scenario_ID : TC_2
    #TAGS
    #version tags
    @0.00
 
    Scenario: TC_2 To verify that channel user is able add widgets in home screen.
    Given Launch the url
    When Login with channel User Credentials
    And Click On Add Widget
    And Click and select Graph
    And Click on save widget
    And Click on confirm save
    And Click on settings
    And Click on edit
    And Click on Remove
    And Click on confirm save
