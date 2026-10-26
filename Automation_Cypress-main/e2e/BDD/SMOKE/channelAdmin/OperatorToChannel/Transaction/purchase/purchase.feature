Feature: purchase

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
    And   Choose Mobile number in dropdown
    And   Enter MSISDN for C2C Purchase and Withdrawal
    And   click on proceed in O2C Withdrawal and purchase
    And   Fill Payment mode, Payment instrument number and Payment date in purchase
    And   Enter Amount and Remarks for Purchase
    And   Click on purchase button
    And  Verify Purchase Successful
    And  click on Approval level 1
    And  Search for the MSISDN and click proceed
    And  Approve in level1
    And  Enter Transaction Details in Level1
    And  Verify Sucessful Approval
    And  click on Approval level 2
    And  Search for the MSISDN and click proceed
    And  Approve in level 2 and 3
    And  Enter Reference Number and Approver's Remarks in Level2 and 3
    And  Verify Sucessful Approval
    And  click on Approval level 3
    And  Search for the MSISDN and click proceed
    And  Approve in level 2 and 3
    And  Enter Reference Number and Approver's Remarks in Level2 and 3
    And  Verify Sucessful Approval


