/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import C2CPurchase from "../../../../../../support/pageObjects/C2CPurchase";
import { Before, Then, When } from "@badeball/cypress-cucumber-preprocessor";

//-----------------OBJECT DECLARATION-----------------------
const purchase= new C2CPurchase();

When("click on C2C purchase",function(){
    purchase.getPurchaseID().click();
})

Then("Enter Amount for Etopup",function(){
    purchase.postEtopupAmount().type(this.C2CData.OrderAmount);
})

Then("Enter Reference Number and remarks in C2C purchase",function(){
    purchase.getReferenceNumberID().type(this.C2CData.ReferenceNumber);
    purchase.getRemarksforPurchaseID().type(this.C2CData.Remarks)
})

Then("Fill Payment mode, Payment instrument number and Payment date in C2C purchase",function(){
    purchase.getPaymentModeDropdown().click();
    purchase.getCashMode().click();
    purchase.getPaymentInstrumentNumber().type(this.C2CData.PaymentInstrumentNumber);
    purchase.getPaymentDateCalender().click();
    purchase.getPaymentDateID().click();
})

Then("Click on purchase",function(){
    purchase.getPurchaseButton().click();
})

Then("Enter pin for C2C purchase and C2C Withdraw",function(){
    purchase.getPinFeild().type(this.C2CData.Pin)
})

Then("Click on Purchase in pinPage",function(){
    purchase.getPurchaseButtoninPinPage().click({force: true});
    purchase.getRequestInitiatedText().should('contain.text','Stock Purchase Request Initiated')
    purchase.getDoneButtonInsucessfulpage().click();
})



