Feature: barringType
 
    Pretups-15997 - loginUser
    (https://plan.comviva.com/browse/PRETUPS-00000)
    Add loginUser from super Admin
 
    # # # Author: kosike Shravanii
    # # # Last Updated: 04/07/2024
    # # # Scenario_ID : TC_1
    #TAGS
    #version tags
    @0.00
 
    Scenario: To verify that superadmin is able to add subLookup for Channel user bar type 
    Given Launch the url
    When Login with super Admin Credentials
    And   Click on SubLookup Management
    And  Selecting From LookUpName Dropdown
    And  Click on ProceedButton
    And Click AddButton
    And Entering SubLookUpNameField
    And Click Add
    And Check if SublookSuccessMsg Is Present
