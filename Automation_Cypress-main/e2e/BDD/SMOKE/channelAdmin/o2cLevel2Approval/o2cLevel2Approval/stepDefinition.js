/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import homePage from "../../../../../../support/pageObjects/homePage";
import o2cLevel2ApprovalPage from "../../../../../../support/pageObjects/o2cLevel2ApprovalPage";
import {
    Given,
    When,
    Then,
    And,
    Before,
  } from "@badeball/cypress-cucumber-preprocessor";

//-----------------OBJECT DECLARATION-----------------------
const o2cLevel2ApprovalPageScreen = new o2cLevel2ApprovalPage();
const homePageScreen = new homePage()

When("Enter Amount and Remarks for O2CLevel2",function(){
    o2cLevel2ApprovalPageScreen.getEtopupAmountFeildinPurchase().type(this.O2CData.AmountforPurchase)
    o2cLevel2ApprovalPageScreen.getRemarksFeild().type(this.O2CData.Remarks)
})

When("Click on purchase button for O2CLevel2",function(){
    o2cLevel2ApprovalPageScreen.getPurchaseButton().click()
})

When("Fill Payment mode, Payment instrument number and Payment date for O2CLevel2",function(){
    o2cLevel2ApprovalPageScreen.getPaymentmodeDropdownforPurchase().click();
    o2cLevel2ApprovalPageScreen.getCashmodeforpurchase().click();
    o2cLevel2ApprovalPageScreen.getPaymentInstrumentNoforpurchase().type(this.C2CData.PaymentInstrumentNumber);
    o2cLevel2ApprovalPageScreen.getCalenderIcon().click();
    o2cLevel2ApprovalPageScreen.getPaymentDateID().click();
})

Then("Verify Purchase Successful for O2CLevel2",function(){
    o2cLevel2ApprovalPageScreen.getPurchaseButtonInReviewpage().click();
    o2cLevel2ApprovalPageScreen.getPurchaseSuccesfulText().should('contain.text',' Purchase successful ')
    o2cLevel2ApprovalPageScreen.getDoneButton().click()
})

Then("click on Approval level 1 for O2CLevel2",function(){
    o2cLevel2ApprovalPageScreen.getApprovalLevel1ID().click()
})

Then("Search for the MSISDN and click proceed for O2CLevel2",function(){
    o2cLevel2ApprovalPageScreen.getMobileNumberFeildID().type(this.asmData.MobileNumber)
    o2cLevel2ApprovalPageScreen.getMSISDNProceedID().click()
})

Then("Approve in level1 for O2CLevel2",function(){
    o2cLevel2ApprovalPageScreen.getApproveButtonforLevel1().click();
})

Then("Enter Transaction Details in Level1 for O2CLevel2",function(){
    o2cLevel2ApprovalPageScreen.getExternalTXNNumber().type(this.purchase.ExternalTXNNo)
    o2cLevel2ApprovalPageScreen.getExternalTXNDate().click()
    o2cLevel2ApprovalPageScreen.getPaymentDateID().click()
    o2cLevel2ApprovalPageScreen.getReferenceNumberInApproval1().type(this.purchase.ReferenceNumber)
    o2cLevel2ApprovalPageScreen.getApproversRemarksinLevel1().type(this.purchase.ApproversRemarks)
})

Then("Verify Sucessful Approval for O2CLevel2",function(){
    o2cLevel2ApprovalPageScreen.getApproveButtoninDetailsPage().click()
    cy.scrollTo('bottom')
    o2cLevel2ApprovalPageScreen.getApproveInReviewPage().click({ force: true })
    o2cLevel2ApprovalPageScreen.getYesButtoninLevel1().click()
    o2cLevel2ApprovalPageScreen.getTransactionApprovedInLevel1().should('contain.text',' Transaction Approved ')
    o2cLevel2ApprovalPageScreen.getDoneInApproval1().click()
})

Then("click on Approval level 2 for O2CLevel2",function(){
    o2cLevel2ApprovalPageScreen.getApprovalLevel2ID().click()
})

Then("Approve in level 2 and 3 for O2CLevel2",function(){
    o2cLevel2ApprovalPageScreen.getApproveButtonforLevel2().click();
})

Then("Enter Reference Number and Approver's Remarks in Level2 and 3 for O2CLevel2",function(){
    o2cLevel2ApprovalPageScreen.getReferenceNumberInApproval1().type(this.purchase.ReferenceNumber)
    o2cLevel2ApprovalPageScreen.getApproversRemarksinLevel1().type(this.purchase.ApproversRemarks)
})

Then("click on Approval level 3 for O2CLevel2",function(){
    o2cLevel2ApprovalPageScreen.getApprovallevel3ID().click()
})
