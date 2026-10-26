/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import purchase from "../../../../../../../../support/pageObjects/purchase";
import {
    Given,
    When,
    Then,
    And,
    Before,
  } from "@badeball/cypress-cucumber-preprocessor";

//-----------------OBJECT DECLARATION-----------------------
const C2Cpurchase= new purchase();

When("Enter Amount and Remarks for Purchase",function(){
    C2Cpurchase.getEtopupAmountFeildinPurchase().type(this.O2CData.AmountforPurchase)
    C2Cpurchase.getRemarksFeild().type(this.O2CData.Remarks)
})

When("Click on purchase button",function(){
    C2Cpurchase.getPurchaseButton().click()
})

When("Fill Payment mode, Payment instrument number and Payment date in purchase",function(){
    C2Cpurchase.getPaymentmodeDropdownforPurchase().click();
    C2Cpurchase.getCashmodeforpurchase().click();
    C2Cpurchase.getPaymentInstrumentNoforpurchase().type(this.C2CData.PaymentInstrumentNumber);
    C2Cpurchase.getCalenderIcon().click();
    C2Cpurchase.getPaymentDateID().click();
})

Then("Verify Purchase Successful",function(){
    C2Cpurchase.getPurchaseButtonInReviewpage().click();
    C2Cpurchase.getPurchaseSuccesfulText().should('contain.text',' Purchase successful ')
    C2Cpurchase.getDoneButton().click()
})

Then("click on Approval level 1",function(){
    C2Cpurchase.getApprovalLevel1ID().click()
})

Then("Search for the MSISDN and click proceed",function(){
    C2Cpurchase.getMobileNumberFeildID().type(this.asmData.MobileNumber)
    C2Cpurchase.getMSISDNProceedID().click()
})

Then("Approve in level1",function(){
    C2Cpurchase.getApproveButtonforLevel1().click();
})

Then("Enter Transaction Details in Level1",function(){
    C2Cpurchase.getExternalTXNNumber().type(this.purchase.ExternalTXNNo)
    C2Cpurchase.getExternalTXNDate().click()
    C2Cpurchase.getPaymentDateID().click()
    C2Cpurchase.getReferenceNumberInApproval1().type(this.purchase.ReferenceNumber)
    C2Cpurchase.getApproversRemarksinLevel1().type(this.purchase.ApproversRemarks)
})

Then("Verify Sucessful Approval",function(){
    C2Cpurchase.getApproveButtoninDetailsPage().click()
    cy.scrollTo('bottom')
    C2Cpurchase.getApproveInReviewPage().click({ force: true })
    C2Cpurchase.getYesButtoninLevel1().click()
    C2Cpurchase.getTransactionApprovedInLevel1().should('contain.text',' Transaction Approved ')
    C2Cpurchase.getDoneInApproval1().click()
})

Then("click on Approval level 2",function(){
    C2Cpurchase.getApprovalLevel2ID().click()
})

Then("Approve in level 2 and 3",function(){
    C2Cpurchase.getApproveButtonforLevel2().click();
})

Then("Enter Reference Number and Approver's Remarks in Level2 and 3",function(){
    C2Cpurchase.getReferenceNumberInApproval1().type(this.purchase.ReferenceNumber)
    C2Cpurchase.getApproversRemarksinLevel1().type(this.purchase.ApproversRemarks)
})

Then("click on Approval level 3",function(){
    C2Cpurchase.getApprovallevel3ID().click()
})
