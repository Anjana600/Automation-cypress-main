Feature: C2S Transaction Reversal Feature
 
    Pretups-15997 - loginUser
    (https://plan.comviva.com/browse/PRETUPS-00000)
    Add loginUser from super Admin
 
    # # # Author: Kosike Shravani
    # # # Last Updated: 04/07/2024
    # # # Scenario_ID : TC_1
    #TAGS
    #version tags
    @0.00
 
 
    Scenario: To verify that channel admin is able to perform channel to subscriber transaction reversal by single operation. 
    Given Launch the url
    When Login with channel Admin Credentials
    And Click on C2S Reversal
    And Enter Transaction ID for C2S Reversal
    And Enter Channel User Mobile Number for C2S reversal
    And Click on Proceed Button for C2S reversal
    And Click on Reversal Button for C2S reversal
    And Click on Reversal Button2 for C2S reversal
    Then check for SuccessMsg for C2S Reversal

    
 
    
    