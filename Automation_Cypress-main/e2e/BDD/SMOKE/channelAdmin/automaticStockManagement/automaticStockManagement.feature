Feature: automaticStockManagement

Pretups-15997 - loginUser
    (https://plan.comviva.com/browse/PRETUPS-00000)
    Add loginUser from super Admin
 
    # # # Author: Niharika Challa
    # # # Last Updated: 09/07/2024
    # # # Scenario_ID : TC_1
    #TAGS
    #version tags
    @0.00
    ##6852

    Scenario: To verify that Channel admin is able to Associate SOS feature to single channel user
    Given     Launch the url
    When      Login with Channel Admin Credentials
    And       Click on automatic stock management
    And       Enter user mobile number
    And       Click on proceed
    And       Disable and Enable SOS transfer allowed
    Then      Click on submit

    # # # Author: Niharika Challa
    # # # Last Updated: 09/07/2024
    # # # Scenario_ID : TC_2
    #TAGS
    #version tags
    @0.00
    ##6852    

    Scenario: To verify that Channel admin is able to De-Associate SOS feature to single channel user
    Given     Launch the url
    When      Login with Channel Admin Credentials
    And       Click on automatic stock management
    And       Enter user mobile number
    And       Click on proceed
    And       Disable and Enable SOS transfer allowed
    Then      Click on submit


    # # # Author: Niharika Challa
    # # # Last Updated: 09/07/2024
    # # # Scenario_ID : TC_3
    #TAGS
    #version tags
    @0.00
    ##6852    

    Scenario: To verify that Channel admin is able to associate SOS feature to multiple users
    Given     Launch the url
    When      Login with Channel Admin Credentials
    And       Click on automatic stock management
    And       Enter user mobile number
    And       Click on proceed
    And       Disable and Enable SOS transfer allowed
    And       Click on submit
    And       Click on Bulk Operation for automatic stock management
    And       Choose domain for Automatic Stock Management
    And       Choose Geography for Automatic Stock Management
    And       Download the template file for Automatic Stock Management
    And       Rename downloaded file
    And       Edit the details and Upload the file
    Then      Click on submit for automatic stock management bulk operation


    # # # Author: Niharika Challa
    # # # Last Updated: 09/07/2024
    # # # Scenario_ID : TC_4
    #TAGS
    #version tags
    @0.00
    ##6852    

    Scenario: To verify that Channel admin is able to de-associate SOS feature to multiple users
    Given     Launch the url
    When      Login with Channel Admin Credentials
    And       Click on automatic stock management
    And       Enter user mobile number
    And       Click on proceed
    And       Disable and Enable SOS transfer allowed
    And       Click on submit
    And       Click on Bulk Operation for automatic stock management
    And       Choose domain for Automatic Stock Management
    And       Choose Geography for Automatic Stock Management
    And       Download the template file for Automatic Stock Management
    And       Rename downloaded file
    And       Edit the details and Upload the file
    Then      Click on submit for automatic stock management bulk operation


    # # # Author: Niharika Challa
    # # # Last Updated: 09/07/2024
    # # # Scenario_ID : TC_5
    #TAGS
    #version tags
    @0.00
    ##6852    

    Scenario: To verify that Channel admin is able to associate Auto c2c feature to multiple users
    Given     Launch the url
    When      Login with Channel Admin Credentials
    And       Click on automatic stock management
    And       Enter user mobile number
    And       Click on proceed
    And       Disable and Enable Auto C2C allowed
    And       Click on submit
    And       Click on Bulk Operation for automatic stock management
    And       Choose domain for Automatic Stock Management
    And       Choose Geography for Automatic Stock Management
    And       Download the template file for Automatic Stock Management
    And       Rename downloaded file
    And       Edit the details and Upload the file
    Then      Click on submit for automatic stock management bulk operation



    # # # Author: Niharika Challa
    # # # Last Updated: 09/07/2024
    # # # Scenario_ID : TC_6
    #TAGS
    #version tags
    @0.00
    ##6852    

    Scenario: To verify that Channel admin is able to de-associate Auto c2c feature for multiple users
    Given     Launch the url
    When      Login with Channel Admin Credentials
    And       Click on automatic stock management
    And       Enter user mobile number
    And       Click on proceed
    And       Disable and Enable Auto C2C allowed
    And       Click on submit
    And       Click on Bulk Operation for automatic stock management
    And       Choose domain for Automatic Stock Management
    And       Choose Geography for Automatic Stock Management
    And       Download the template file for Automatic Stock Management
    And       Rename downloaded file
    And       Edit the details and Upload the file
    Then      Click on submit for automatic stock management bulk operation


    # # # Author: Niharika Challa
    # # # Last Updated: 09/07/2024
    # # # Scenario_ID : TC_7
    #TAGS
    #version tags
    @0.00
    ##6852    

    Scenario: To verify that Channel admin is able to associate Auto c2c as well as SOS feature to multiple users
    Given     Launch the url
    When      Login with Channel Admin Credentials
    And       Click on automatic stock management
    And       Enter user mobile number
    And       Click on proceed
    And       Disable and Enable Auto C2C allowed
    And       Disable and Enable SOS transfer allowed
    And       Click on submit
    And       Click on Bulk Operation for automatic stock management
    And       Choose domain for Automatic Stock Management
    And       Choose Geography for Automatic Stock Management
    And       Download the template file for Automatic Stock Management
    And       Rename downloaded file
    And       Edit the details and Upload the file
    Then      Click on submit for automatic stock management bulk operation


    # # # Author: Niharika Challa
    # # # Last Updated: 09/07/2024
    # # # Scenario_ID : TC_8
    #TAGS
    #version tags
    @0.00
    ##6852    

    Scenario: To verify that Channel admin is able to de-associate Auto c2c as well as SOS feature for multiple users
    Given     Launch the url
    When      Login with Channel Admin Credentials
    And       Click on automatic stock management
    And       Enter user mobile number
    And       Click on proceed
    And       Disable and Enable Auto C2C allowed
    And       Disable and Enable SOS transfer allowed
    And       Click on submit
    And       Click on Bulk Operation for automatic stock management
    And       Choose domain for Automatic Stock Management
    And       Choose Geography for Automatic Stock Management
    And       Download the template file for Automatic Stock Management
    And       Rename downloaded file
    And       Edit the details and Upload the file
    Then      Click on submit for automatic stock management bulk operation







