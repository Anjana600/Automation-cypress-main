Feature: batchc2cBulkOperation

    Scenario: To verify that Channel User would be able to approve Batch C2C
    Given Launch the url
    When Login with channel User Credentials
    And Click on Channel to channel
    And Click on Approval level1 C2C
    And Click on Bulk Operation c2c for approval
    And enter the batch ID into the input field
    And Click on Approve One c2c
    And Enter Approvers Remarks
    And Click on Approve Two c2c
    And Click on Yes c2c
    And Click on C2C Approval1 Done btn
    