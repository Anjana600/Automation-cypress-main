Feature: User Barring Management for Bar User
 
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
    And Click on User Barring Management
    And Click on Bulk
    And Select From Module Dropdown
    And Select From Barred as Drodown
    And Select From Barring Type Dropdown
    And Select From Barring Reason Dropdown
    And Click on Upload File
    And Click on Submit
    
    