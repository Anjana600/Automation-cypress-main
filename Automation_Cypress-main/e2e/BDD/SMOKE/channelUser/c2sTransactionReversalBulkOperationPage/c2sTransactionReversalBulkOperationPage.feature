Feature: c2s Transaction Transaction Reversal Bulk Operation
 
    Pretups-15997 - loginUser
    (https://plan.comviva.com/browse/PRETUPS-00000)
    Add loginUser from super Admin
 
    # # # Author: Kosike Shravani
    # # # Last Updated: 04/07/2024
    # # # Scenario_ID : TC_1
    #TAGS
    #version tags
    @0.00
 
 
    Scenario: To Verify that channel user has performed c2s transaction reversal.
    Given Launch the url
    When Login with Channel User Credentials
    And Click on C2S Transaction Reversal
    And Click on Bulk Operation For C2S Transaction Reversal
    And Click on Download File Template C2S Transaction Reversal
    And Click on Enter Batch Name C2S Transaction Reversal
    And Click on Upload File C2S Transaction Reversal
    And Click on Proceed C2S Transaction Reversal
   