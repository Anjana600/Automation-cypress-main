Feature: C2CTransfer

Pretups-15997 - loginUser
    (https://plan.comviva.com/browse/PRETUPS-00000)
    Add loginUser from super Admin
 
    # # # Author: Niharika Challa
    # # # Last Updated: 09/07/2024
    # # # Scenario_ID : TC_1
    #TAGS
    #version tags
    @0.00

Scenario: To Verify that channel User is able to Initiate the Transfer Successfully
Given     Launch the url
When      Login with channel User Credentials
And       Click on Channel to Channel
And       Select Search by type
And       Select the Category of the User
And       Enter the Mobile number or login ID
And       Click on Proceed
And       Enter Order amount to the Product type
And       Enter Reference number and Remarks
And       Fill Payment mode, Payment instrument number and Payment date
And       click on Transfer
And       Verify the Details and Enter PIN
Then      Click on Transfer in pinPage