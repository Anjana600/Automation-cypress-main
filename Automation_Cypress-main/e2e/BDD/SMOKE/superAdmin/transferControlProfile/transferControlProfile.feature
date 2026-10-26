Feature: transferControlProfile
 
    Pretups-15997 - loginUser
    (https://plan.comviva.com/browse/PRETUPS-00000)
    Add loginUser from super Admin
 
    # # # Author: kosike Shravanii
    # # # Last Updated: 04/07/2024
    # # # Scenario_ID : TC_1
    #TAGS
    #version tags
    @0.00
 
    Scenario: Verify that superadmin is able to add domain
    Given Launch the url
    When Login with super Admin Credentials
    And  Click on Profile Management
    And  Click on Domain and Category Names
    And  Click on Proceed button
    And  Enter Profile Name
    And  Enter Short Name
    And  Enter Description
    And  Entering Balance Preferences
    And Entering Daily Values
    And Entering Weekly Values
    And Entering Monthly Values
    And Click on Save




 