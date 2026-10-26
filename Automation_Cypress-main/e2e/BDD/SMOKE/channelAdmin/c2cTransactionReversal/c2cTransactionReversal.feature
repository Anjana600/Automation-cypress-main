Feature: C2C Transaction Reversal Feature
 
    Pretups-15997 - loginUser
    (https://plan.comviva.com/browse/PRETUPS-00000)
    Add loginUser from super Admin
 
    # # # Author: Kosike Shravani
    # # # Last Updated: 04/07/2024
    # # # Scenario_ID : TC_1
    #TAGS
    #version tags
    @0.00
 
 
    Scenario: To verify that channel admin is able to initiate c2c transaction reversal
    Given Launch the url
    When Login with channel Admin Credentials
    And Click on C2C Reversal
    And Enter Transaction ID
    And Click on Proceed Button for C2C reversal
    And Click on Reversal Button
    And Enter Remarks For C2C Reversal
    And Click on Reversal Transaction for C2C
    And Click on Yes Reversal Transaction for C2C
    Then check for SuccessMsg for c2cReversal

    
 
    
    