Feature: automaticStockManagement

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

    Scenario: Verify that Auto O2C should be triggered for a channel user who has permission for auto O2C and only if stock balance goes below threshold
    Given     Launch the url
    When      Login with Channel Admin Credentials
    And       Click on automatic stock management
    And       Enter user mobile number
    And       Click on proceed
