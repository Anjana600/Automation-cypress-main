Feature: O2CReturn
 
    Pretups-15997 - loginUser
    (https://plan.comviva.com/browse/PRETUPS-00000)
    Add loginUser from super Admin
 
    # # # Author: Kosike Shravani
    # # # Last Updated: 04/07/2024
    # # # Scenario_ID : TC_1
    #TAGS
    #version tags
    @0.00
 
 
    Scenario: To verify that channel user is able to withdraw
    Given Launch the url
    When Login with Channel User Credentials
    And Click on O2C For O2CReturn
    And Click on Return
    And Enter Order Amount For O2CReturn
    And Enter Remarks For O2C Return
     And Click on Return2
    And Enter Pin For O2C Return
    And Click on Return3
    Then Check if O2CReturnSuccessMsg Is Present
    
    