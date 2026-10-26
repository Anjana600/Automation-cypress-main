Feature: batchc2cBulkOperation

    Scenario: To verify that channel user is able to perform batch c2c by entering valid details in all mandatory fields of user template file (English)
    Given Launch the url
    When Login with channel User Credentials
    And Click on Channel to channel
    And Click on Transaction C2C
    And Click on Bulk C2C Operation
    And Click and select C2C Category
    And Click on download templeteC2C
    And Enter c2c BatchName
    # editing templete is left and renaming
    And Click on choose templeteC2C
    And Click on C2C Sumbit Button
    And Enter C2C Pin
    And Click on C2C Confirm
    And Click on C2C Done btn