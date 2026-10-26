Feature: messageGateway

    Pretups- message Gateway
    Add Message Gateway
 
 
    # # # Author: Madhu Hema
    # # # Last Updated: 05/07/2024
    # # # Scenario_ID : TC_1
    #TAGS
    #version tags
    @0.00
 
    Scenario: TC_1 Click On Message Gateway
    Given Launch the url
    When Login with super Admin Credentials
    And Click on message Gateway
    And Click On Add Button
    And Enter Gateway Code
    And Enter Gateway Name
    And Select all Required Types
    And Enter Host and click submit
    And click Confirm
