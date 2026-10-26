Feature: O2CCommission
    Pretups-15997 - loginUser
    (https://plan.comviva.com/browse/PRETUPS-00000)
    Add loginUser from super Admin
 
    # # # Author: Niharika Challa
    # # # Last Updated: 15/07/2024
    # # # Scenario_ID : TC_1
    #TAGS
    #version tags
    @0.00

    Scenario: To verify that Channel Admin can initiate batch O2C transfer.
    Given Launch the url
    When  Login with Channel Admin Credentials
    And   click on Operator to Channel
    And   Select Commisson in Operator to Channel
    And   Click on Bulk Operation
    And   Select Geography
    And   Select Domain
    And   Select User Category
    And   Select Product
    And   Select Operation
    And   Download Template for O2C Commission
    And   Rename file for O2C Commission