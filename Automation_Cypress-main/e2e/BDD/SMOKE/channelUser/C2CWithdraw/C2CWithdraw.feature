Feature: C2CPurchase

Pretups-15997 - loginUser
    (https://plan.comviva.com/browse/PRETUPS-00000)
    Add loginUser from super Admin
 
    # # # Author: Niharika Challa
    # # # Last Updated: 09/07/2024
    # # # Scenario_ID : TC_1
    #TAGS
    #version tags
    @0.00
    ##6852

    Scenario: To Verify that Channel User is able to initiate C2C Purchase successfully.
    Given     Launch the url
    When      Login with channel User Credentials
    And       Click on Channel to Channel
    And       Click on C2C Withdrawal
    And       Select the Search by
    And       Enter MobileNumber
    And       click on proceed
    And       Enter Amount for Etopup in withdrawal
    And       Enter remarks in C2C withdraw
    And       Click on withdraw button for C2C withdraw
    And       Enter pin for C2C purchase and C2C Withdraw
    Then      Verify withdraw sucessful