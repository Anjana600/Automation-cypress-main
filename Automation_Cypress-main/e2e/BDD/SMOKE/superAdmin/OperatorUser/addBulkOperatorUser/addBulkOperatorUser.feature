Feature: addBulkOperatorUser

    Pretups- addBulkOperatorUsers
    Add Bulk Operator Users
 
 
    # # # Author: Madhu Hema
    # # # Last Updated: 05/07/2024
    # # # Scenario_ID : TC_1
    #TAGS
    #version tags
    @0.00
 
    Scenario: TC_1 To verify that superadmin is able to add multiple operator users in batch 
    Given Launch the url
    When Login with super Admin Credentials
    And Click on operator user
    And Click On bulk tab
    And Click and select category
    And Click On Download Template
    And Enter batch name
    # editing the file and reuploading link not there
    And Click On Choose Template
    And Click On submit
    And Click On confirm
    And Click On doneid
