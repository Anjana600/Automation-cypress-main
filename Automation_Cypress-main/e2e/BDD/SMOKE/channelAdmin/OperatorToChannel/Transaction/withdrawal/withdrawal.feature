Feature: withdrawal

    Pretups-15997 - loginUser
    (https://plan.comviva.com/browse/PRETUPS-00000)
    Add loginUser from super Admin
 
    # # # Author: Niharika Challa
    # # # Last Updated: 15/07/2024
    # # # Scenario_ID : TC_1
    #TAGS
    #version tags
    @0.00

    Scenario: To verify that Channel Admin is able to perform O2C withdraw.
    Given Launch the url
    When  Login with Channel Admin Credentials
    And   click on Operator to Channel
    And   click on withdrawal
    And   Choose operator to wallet
    And   Choose Mobile number in dropdown
    And   Enter MSISDN for C2C Purchase and Withdrawal
    And   click on proceed in O2C Withdrawal and purchase
    And   Enter Amount and Remarks
    And   Click on withdraw button
    Then  Validate withdraw sucessful