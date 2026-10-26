Feature: batchModifyC2SCardGroup
 
    Pretups-15997 - loginUser
    (https://plan.comviva.com/browse/PRETUPS-00000)
    Add loginUser from super Admin
 
    # # # Author: Kosike Shravani
    # # # Last Updated: 22/07/2024
    # # # Scenario_ID : TC_1
    #TAGS
    #version tags
    @0.00
 
 
    Scenario: To verify that user is able to add associate O2C transfer rule
    Given Launch the url
    When Login with network Admin Credentials
    And  Click on CardGroup For batchModifyC2SCardGroup
    And  Click on Bulk For batchModifyC2SCardGroup
    And Select From serviceTypeDropdown For batchModifyC2SCardGroup
    And Select Date For batchModifyC2SCardGroup
    And Click SelectAll For batchModifyC2SCardGroup
    And Download File For batchModifyC2SCardGroup
    And Upload File For batchModifyC2SCardGroup
    And Click on Submit For batchModifyC2SCardGroup