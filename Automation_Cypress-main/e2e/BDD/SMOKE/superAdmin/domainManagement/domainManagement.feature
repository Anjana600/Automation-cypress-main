Feature: domainManagementFeature
 
    Pretups-15997 - loginUser
    (https://plan.comviva.com/browse/PRETUPS-00000)
    Add loginUser from super Admin
 
    # # # Author: kosike Shravanii
    # # # Last Updated: 04/07/2024
    # # # Scenario_ID : TC_1
    #TAGS
    #version tags
    @0.00
 
    Scenario: Verify that superadmin is able to add domain 
    Given Launch the url
    When Login with super Admin Credentials
    And   Click on ChannelDomain
    And  click on addDomain
    And  Add Domain Details
    And click proceedToAddDomain
    And Enter Category Details
    And click Next
    And Enter Owner Role Details
    And Enter Owner Allowed Sources
    And Enter Owner Login Details

    