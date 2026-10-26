Feature: Bulk Channel User Creation
 
    Pretups-15997 - loginUser
    (https://plan.comviva.com/browse/PRETUPS-00000)
    Add loginUser from super Admin
 
    # # # Author: Kosike Shravani
    # # # Last Updated: 04/07/2024
    # # # Scenario_ID : TC_1
    #TAGS
    #version tags
    @0.00
 
 
    Scenario: To verify that channel admin is able to bar users in bulk by uploading a text file with comma separated mobile numbers 
    Given Launch the url
    When Login with channel Admin Credentials
    And Click on Channel User For bulk Channel User Creation
    And Click on BulkOperation For bulk Channel User Creation
    And Enter BatchName For bulk Channel User Creation
    And Select From Domain Dropdown For bulk Channel User Creation
    And Select From Geography Dropdown For bulk Channel User Creation
    And Download Blank Template For bulk Channel User Creation
    And Click On Upload File For bulk Channel User Creation
    And Click On Submit For bulk Channel User Creation
    