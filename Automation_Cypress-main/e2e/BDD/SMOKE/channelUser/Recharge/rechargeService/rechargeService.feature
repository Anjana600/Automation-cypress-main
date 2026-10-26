Feature: batchc2cBulkOperation

    Scenario: To verify that Channel User is able to perform "customer recharge" through web.
    Given Launch the url
    When Login with channel User Credentials
    And Click on Recharge
    And Click on Recharge Service
    And Click on Recharge Service Single
    And Click on Recharge Prepaid
    And Enter Recharge Mobile Number
    And Enter Recharge Amount
    And Click and select Sub services
    And Click on English
    And Click on RechargeOne Btn
    And Enter on Recharge Pin
    And Click on Confirm Recharge
# After this app is not working - getting "Recharge Failed - invalid amoumt"