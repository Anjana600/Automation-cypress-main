Feature: userHeirarcy

    Pretups- User Heirarcy
 
    # # # Author: Madhu Hema
    # # # Last Updated: 10/07/2024
    # # # Scenario_ID : TC_1
    #TAGS
    #version tags
    @0.00
 
    Scenario: TC_1 To Verify that channel admin is able view the  User hierarchy of channel user.
    Given Launch the url
    When Login with channel Admin Credentials
    And Click on Name Card
    And Click on user Heirarcy
    And Enter mobile number
    And Click On Proceed

    # # # Author: Madhu Hema
    # # # Last Updated: 23/07/2024
    # # # Scenario_ID : TC_2
    #TAGS
    #version tags
    @0.00
 
    Scenario: TC_2 To verify that channel admin is able to transfer user hierarchy from one parent to another parent.
    Given Launch the url
    When Login with channel Admin Credentials
    And Click on Name Card
    And Click on user Heirarcy
    And Enter mobile number for transfer hierarchy
    And Click On Proceed
    And Click On Select User
    And Click On Select User From Dropdown
    And Click On Go btn
    And Click On Suspended or Transfer Heirarchy
    And Click On Suspended Heirarchy Proceed Btn
    And Click On Suspended Heirarchy Done Btn
    And Click On Proceed
    And Click On Select User
    And Click On Select User From Dropdown
    And Click On Go btn
    And Click On Suspended or Transfer Heirarchy
    And Click and Select Geographical Domain
    And Click On Owner or parent user and search
    And Select the Owner and submit
    And Click On Heirarchy ProceedBtn
    And Click On Heirarchy Done Btn



