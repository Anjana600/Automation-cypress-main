Feature: initiateStockDeduction

    Pretups- Initiate Stock Deduction
    Add Initiate Stock Deduction
 
    # # # Author: Madhu Hema
    # # # Last Updated: 09/07/2024
    # # # Scenario_ID : TC_1
    #TAGS
    #version tags
    @0.00
 
    Scenario: TC_1 To verify that stock is deducting properly
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

