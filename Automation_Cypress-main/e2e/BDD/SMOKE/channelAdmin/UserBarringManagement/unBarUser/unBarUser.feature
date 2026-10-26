Feature: User Barring Management To UnBar User
 
    Pretups-15997 - loginUser
    (https://plan.comviva.com/browse/PRETUPS-00000)
    Add loginUser from super Admin
 
    # # # Author: Kosike Shravani
    # # # Last Updated: 04/07/2024
    # # # Scenario_ID : TC_1
    #TAGS
    #version tags
    @0.00
 
 
    Scenario: To verify that channel admin is able to unbar users in bulk by uploading a text file that has one mobile number per line 
    Given Launch the url
    When Login with channel Admin Credentials
    And Click on User Barring Management
    And Click on UnBarUser
    And Click on Bulk
    And Select From Module Dropdown
    And Select From Barred as Drodown
    And Select From Barring Type Dropdown
    And Click on Upload File
    And Click on Submit
    
    