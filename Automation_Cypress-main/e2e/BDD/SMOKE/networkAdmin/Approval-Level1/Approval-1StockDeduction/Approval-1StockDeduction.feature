Feature: Approval-1StockDeduction

    Pretups- Approval-1 Stock Deduction
    Approval Stock Deduction
 
    # # # Author: Madhu Hema
    # # # Last Updated: 11/07/2024
    # # # Scenario_ID : TC_1
    #TAGS
    #version tags
    @0.00
 
    Scenario: TC_1 To verify that requested quantity for at least one product should be specified and network admin is able to approve the txn
    Given Launch the url
    When Login with network Admin Credentials
    And Click on Network Stock
    And Click on Deduction
    And Click on Wallet type DropDown
    And Select on Wallet type
    And Click on Proceed
    And Enter the Requested Quantities
    And Click on Proceed Button
    And Click on Done Button
    # initiating the network stock for at least one product
    And Click on Approval level1
    And Click on Network Stock in Approval
    And Click on DeductionBtn
    And Click on Approve
    And Click on Proceed
    And Click on Approve btn
    And Click on Done Button
