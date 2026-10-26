Feature: associateO2CTransferRule
 
    Pretups-15997 - loginUser
    (https://plan.comviva.com/browse/PRETUPS-00000)
    Add loginUser from super Admin
 
    # # # Author: Kosike Shravani
    # # # Last Updated: 04/07/2024
    # # # Scenario_ID : TC_1
    #TAGS
    #version tags
    @0.00
 
 
    Scenario: To verify that user is able to add associate O2C transfer rule
    Given Launch the url
    When Login with network Admin Credentials
    And  Click on Transfer Rule
    And  Click on O2C
    And  Select Domain 
    And Click on Proceed
    And Click on AddTransferRule
    And Enter Mandatory Details
    And Click on AddButton
    And Check if O2CTransferRuleSuccessMsg Is Present