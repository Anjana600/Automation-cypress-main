Feature: batchCommissionPayoutBluk

    Pretups- batch Commission PayoutBluk
    Approval batch Commission PayoutBluk
 
    # # # Author: Madhu Hema
    # # # Last Updated: 18/07/2024
    # # # Scenario_ID : TC_1
    #TAGS
    #version tags
    @0.00
    Scenario: TC_1 To verify that channel admin is able to approve bulk commission payout
    Given Launch the url
    When Login with channel Admin Credentials
    And Click on Operator To Channel
    And Click on Commission
    And Click on Bulk Operation
    And Click and Select Geography
    And Click and Select Domain
    And Click and Select User Category
    And Click and Select Product
    And Click and Select Operation For Commission Payout
    And Click on Download Template
    # need to put data into excel
    And Enter Batch Name
    # re-upload by renaming it
    And Click on ChooseFile
    And Click on Submit Button
    And Click on Confirm Button
    And Click on Done Button
    # Saving the batch name
    When Retrieve text from the element
    # initiating the network stock for at least one product
    And Click on Approval level1
    And Click on CommissionID
    And Click on BulkOperationID
    And enter the batch name into the input field
    And Click on ApprovalOne
    And Click on getApprovalTwoAndThree
    And Click on YesBtn
    And Click on DoneBtn
# Approval level2
    And Click on Approval level2
    And Click on CommissionIDlevel2
    And Click on BulkOperationID
    And enter the batch name into the input field
    And Click on ApprovalOne
    And Click on getApprovalTwoAndThree
    And Click on YesBtn
    And Click on DoneBtn
# Approval level3
    And Click on Approval level3
    And Click on CommissionIDlevel3
    And Click on BulkOperationID
    And enter the batch name into the input field
    And Click on ApprovalOne
    And Click on getApprovalTwoAndThree
    And Click on YesBtn
    And Click on DoneBtn