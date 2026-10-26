Feature: userMigrationAcrossDomain

    Pretups-15997 - loginUser
    (https://plan.comviva.com/browse/PRETUPS-00000)
    Add loginUser from super Admin
 
    # # # Author: Niharika Challa
    # # # Last Updated: 04/07/2024
    # # # Scenario_ID : TC_1
    #TAGS
    #version tags
    @0.00
 
    Scenario: Login with url
    Given Launch the url
    When  Login with Channel Admin Credentials
    And   click on User Migration Across Domain
    And   Select Domain Dropdown
    And   Download the template
    # And   Click on choose file
   