Feature: changePin

    Pretups- profilePage
 
    # # # Author: Madhu Hema
    # # # Last Updated: 22/07/2024
    # # # Scenario_ID : TC_1
    #TAGS
    #version tags
    @0.00
 
    Scenario: TC_1 To Verify that channel user is able to change pin as per PIN policy
    Given Launch the url
    When Login with channel User Credentials
    And Click on Name Card
    And Click on Security Settings
    And Click on Pin
    And Enter Old Pin
    And Enter New Pin
    And Click on Confirm Pin
    And Click on Remarks
    And Click on Change Pin SubmitBtn
    And Click on Confirm YesBtn
    And Click on Change Pin DoneBtn

