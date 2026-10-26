Feature: O2cTransaction Reversal Feature
 
    Pretups-15997 - loginUser
    (https://plan.comviva.com/browse/PRETUPS-00000)
    Add loginUser from super Admin
 
    # # # Author: Kosike Shravani
    # # # Last Updated: 04/07/2024
    # # # Scenario_ID : TC_1
    #TAGS
    #version tags
    @0.00
 
 
    Scenario: To verify that channel admin is able to initiate O2c transaction reversal
    Given Launch the url
    When Login with Channel Admin2 Credentials
    And Click on O2C Reversal
    And Enter Transaction ID for O2C Reversal
    And Click on Proceed Button for O2C reversal
    And Click on Reversal Button for O2C
    And Enter Remarks For O2C Reversal
    And Click on Reversal Transaction for O2C
    And Click on Yes Reversal Transaction for O2C
    Then check for SuccessMsg for O2CReversal

    
 
    
    