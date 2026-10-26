Feature: postPaidRecharge
 
    Pretups-15997 - loginUser
    (https://plan.comviva.com/browse/PRETUPS-00000)
    Add loginUser from super Admin
 
    # # # Author: Kosike Shravani
    # # # Last Updated: 04/07/2024
    # # # Scenario_ID : TC_1
    #TAGS
    #version tags
    @0.00
 
 
    Scenario: To verify that postpaid recharge is successful by web from channel user
    Given Launch the url
    When Login with Channel User Credentials
    And Click on Recharge For PostPaid Recharge
    And Click on Post Paid Recharge
    And Enter Mobile No for Recharge
    And Enter Amount For Recharge
    And Click On PayBill For Postpaid Recharge
    And Enter Pin for Postpaid Recharge
    And Click on PayBill2 for postPaid Recharge
    Then Check For Success Message for postPaid Recharge
    
    