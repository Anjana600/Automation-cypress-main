Feature: Recharge Reversal
 
    Pretups-15997 - loginUser
    (https://plan.comviva.com/browse/PRETUPS-00000)
    Add loginUser from super Admin
 
    # # # Author: Kosike Shravani
    # # # Last Updated: 04/07/2024
    # # # Scenario_ID : TC_1
    #TAGS
    #version tags
    @0.00
 
 
    Scenario: to verify that reversal is working successfully
    Given Launch the url
    When Login with Channel User Credentials
    And Click on Recharge
    And Click on Reversal for Recharge
    And Select MobileNo From Searchby Dropdown
    And Enter MobileNo for Recharge Reversal
    And Click on Proceed for Recharge Reversal
    And Click on reverse Amount for Recharge Reversal
    And Enter Pin For Recharge Reversal
    And Click on Reverse Amount2 For Recharge Reversal
   Then Check if rechargeReversal Success Msg Is Present
    
    