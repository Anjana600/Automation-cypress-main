Feature: serviceKeywordManagement
 
    Pretups-15997 - loginUser
    (https://plan.comviva.com/browse/PRETUPS-00000)
    Add loginUser from super Admin
 
    # # # Author: kosike Shravanii
    # # # Last Updated: 04/07/2024
    # # # Scenario_ID : TC_1
    #TAGS
    #version tags
    @0.00
 
    Scenario: View and Add service keyword 
    Given Launch the url
    When Login with super Admin Credentials
    And   Click on Service Keyword Management
    And  Click on Add Button
    And   Click on Entering Mandatory fields 
    And  Click on Proceed Button
    And Check if SuccessMsg Is Present