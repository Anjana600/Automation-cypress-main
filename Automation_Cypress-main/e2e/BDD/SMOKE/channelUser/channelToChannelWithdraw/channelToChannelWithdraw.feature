Feature: channelToChannelWithdraw
 
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
    And Click on Channel to Channel
    And Click on Withdrawl
    And Select searchby
    And Click on Proceed For Withdrawl
    And Enter Order Amount
    And Enter Remarks
    And click on withdraw
    And Enter Pin
    And click withdraw
    Then check for withdraw SuccessMsg
    