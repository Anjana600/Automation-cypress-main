Feature: userDefaultConfigManagement
 
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
    And  Click on Profile Management For userDefaultConfigManagementPage
    And  Click on Bulk CategoryWise Default Profiles For userDefaultConfigManagementPage
    And Select Domain From Domain Dropdown For userDefaultConfigManagementPage
    And Click on Download Template For userDefaultConfigManagementPage
    And Click on Choose File For userDefaultConfigManagementPage
    And Click On Submit For userDefaultConfigManagementPage
  