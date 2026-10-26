/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import homePage from "../../../../../../support/pageObjects/homePage";
import C2CTransfer from "../../../../../../support/pageObjects/C2CTransfer";
import {
    Given,
    When,
    Then,
    And,
    Before,
  } from "@badeball/cypress-cucumber-preprocessor";

//-----------------OBJECT DECLARATION-----------------------
const homescreen = new homePage();
const C2C= new C2CTransfer();

When("Click on Channel to Channel",function(){
    homescreen.getChanneltoChannelID().click();
})

Then("Select Search by type",function(){
    C2C.getSearchDropdownID().click();
})

Then("Select the Category of the User",function(){
    C2C.getMobileNumberinSearchID().click();
})

Then("Enter the Mobile number or login ID",function(){
    C2C.getEnterMSISDNID().type(this.C2CData.MobileNumberofChannelUser);
})

Then("Click on Proceed",function(){
    C2C.getProceedID().click();
})

Then("Enter Order amount to the Product type",function(){
    C2C.getEnterOrderAmountID().type(this.C2CData.OrderAmount);
})

Then("Enter Reference number and Remarks",function(){
    C2C.getReferenceNumberID().type(this.C2CData.ReferenceNumber);
    C2C.getRemarksID().type(this.C2CData.Remarks);
})

Then("Fill Payment mode, Payment instrument number and Payment date",function(){
    C2C.getPaymentModeDropdown().click();
    C2C.getCashPaymentID().click();
    C2C.getPaymentInstrumentNumber().type(this.C2CData.PaymentInstrumentNumber);
    C2C.getPaymentDateCalender().click();
    C2C.getPaymentDateID().click();
})

Then("click on Transfer",function(){
    C2C.getTransferButtonID().click();
})

Then("Verify the Details and Enter PIN",function(){
    C2C.getPinfieldID().type(this.C2CData.Pin);
})

Then("Click on Transfer in pinPage",function(){
    C2C.getTransferinPinpage().click({force: true});
    C2C.getDoneButton().click();
    C2C.getTransferRequestInitiatedPopup().should('contain.text','  Transfer Request Initiated ')
})