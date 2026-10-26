Feature: bulkChannelUserCreationByChannelUser
 
    Pretups-15997 - loginUser
    (https://plan.comviva.com/browse/PRETUPS-00000)
    Add loginUser from super Admin
 
    # # # Author: Kosike Shravani
    # # # Last Updated: 22/07/2024
    # # # Scenario_ID : TC_1
    #TAGS
    #version tags
    @0.00
 
 Scenario:To verify that the initiation of Bulk Channel User creation can be done by Channel user.
    Given Launch the url
    When Login with Channel User Credentials
    And Click on Channel User For bulkChannelUserCreationByChannelUser
    And Click on Bulk For bulkChannelUserCreationByChannelUser
    And Click on Batch Name For bulkChannelUserCreationByChannelUser
    And Click on Download Template For bulkChannelUserCreationByChannelUser
    And Click on Upload File For bulkChannelUserCreationByChannelUser
    And Click on Submit For bulkChannelUserCreationByChannelUser
   