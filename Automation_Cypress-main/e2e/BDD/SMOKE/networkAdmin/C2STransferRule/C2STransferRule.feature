Feature: C2STransferRule

    Pretups- C2STransferRule
    Add C2STransferRule
 
    # # # Author: Madhu Hema
    # # # Last Updated: 16/07/2024
    # # # Scenario_ID : TC_1
    #TAGS
    #version tags
    @0.00
 
    Scenario: TC_1 To verify that Network Admin is able to add C2S Transfer rule successfully.
    Given Launch the url
    When Login with network Admin Credentials
    And Click on Transfer Rules
    And Click on add transfer rule
    And Click and select Channel Domain
    And Click and select Channel Category
    And Click and select Channel Grade
    And Click and select Receiver Type
    And Click and select Receiver Service Class
    And Click and select Service Type
    And Click and select Sub-Service
    And Click and select Card Group Set
    And Click on save
    And Click on ConfirmBtn
    And Click on DoneBtn
    # Need to delete what is added
    And Click and select GatewayCode
    And Click and select Channel Domain
    And Click and select Channel Category
    And Click and select Channel Grade
    And Click and select Status
    And Click on ProceedBtn
    And Click and enter element into search
    And Click on DeleteBtn
    And Click on YesButton
    And Click on DoneBtn
