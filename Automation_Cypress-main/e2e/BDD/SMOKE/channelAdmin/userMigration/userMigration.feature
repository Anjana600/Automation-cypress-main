Feature: userMigration

    Pretups- User Migration Across Domain
    User Migration Across Domain
 
    # # # Author: Madhu Hema
    # # # Last Updated: 16/07/2024
    # # # Scenario_ID : TC_1
    #TAGS
    #version tags
    @0.00
 
    Scenario: TC_1 To verify that the channel admin can migrate channel user of one category to another 
    Given Launch the url
    When Login with channel Admin Credentials
    And Click on user Migration Acroos Domaim
    And Click on select type Dropdown
    And Select on Domain type
    And Click on download templete
    # rename and reupload file
    And Click on Upload templete
    And Click on Sumbit Button
    And Click on Confirm Button
    And Click on Done btn
