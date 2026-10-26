Feature: C2CReturn

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

    Scenario: To Verify that Channel User is able to Return Stock to the Parent User successfully
    Given     Launch the url
    When      Login with channel User Credentials
    And       Click on Channel to Channel
    And       Click on Return
    And       Select the Search by
    And       Enter MobileNumber
    And       click on proceed
    And       Enter the amount to be returned and Remarks
    And       click on Return
    And       Enter PIN after Reviewing the details
    Then      Click on return and done button
