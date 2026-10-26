Feature: C2SReconciliation

    Pretups- C2S Reconciliation
    Add C2S Reconciliation
 
    # # # Author: Madhu Hema
    # # # Last Updated: 09/07/2024
    # # # Scenario_ID : TC_1
    #TAGS
    #version tags
    @0.00
 
 
    Scenario: TC_1 To verify that user is able to reconcile c2s transaction as success
    Given Launch the url
    When Login with network Admin Credentials
    And Click on C2S Reconciliation
    And Click on Data Range
    And Set Start Date and End Date
    And Click and select on Service
    And Click on Proceed Btn
    And Click on edit Btn
    And Click on success Btn


    # # # Author: Madhu Hema
    # # # Last Updated: 09/07/2024
    # # # Scenario_ID : TC_2
    #TAGS
    #version tags
    @0.00
 
 
    Scenario: TC_2 To verify that user is able to reconcile c2s transaction as success
    Given Launch the url
    When Login with network Admin Credentials
    And Click on C2S Reconciliation
    And Click on Data Range
    And Set Start Date and End Date
    And Click and select on Service
    And Click on Proceed Btn
    And Click on edit Btn
    And Click on fail Btn
