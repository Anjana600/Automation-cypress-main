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
 
 
    Scenario: to verify that c2s bulk is successful
    Given Launch the url
    When Login with Channel User Credentials
    And Click on Channel User For bulkChannelUserCreationByChannelUser
    And Click on Bulk For bulkChannelUserCreationByChannelUser
    And Click on Download File Template C2S Transaction Reversal
    And Click on Enter Batch Name C2S Transaction Reversal
    And Click on Upload File C2S Transaction Reversal
    And Click on Proceed C2S Transaction Reversal
   