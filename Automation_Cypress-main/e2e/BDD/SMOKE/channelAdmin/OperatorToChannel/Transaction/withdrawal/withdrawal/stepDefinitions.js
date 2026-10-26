/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import homePage from "../../../../../../../../support/pageObjects/homePage";
import withdrawal from "../../../../../../../../support/pageObjects/withdrawal";
import {
    Given,
    When,
    Then,
    And,
    Before,
  } from "@badeball/cypress-cucumber-preprocessor";

//-----------------OBJECT DECLARATION-----------------------
const homeScreen= new homePage();
const withdraw= new withdrawal();

When("click on Operator to Channel",function(){
    homeScreen.getoperatorToChannelID().click();
    cy.wait(2000)
})

Then("click on withdrawal",function(){
    withdraw.getWithdrawalID().click();
})

Then("Choose operator to wallet",function(){
    withdraw.getoperatorWalletDropdown().click();
    withdraw.getsaleOperatorwallet().click();
})

Then("Choose Mobile number in dropdown",function(){
    withdraw.getsearchByDropdown().click();
    withdraw.getsearchByMobileNumberID().click();
})

Then("Enter MSISDN for C2C Purchase and Withdrawal",function(){
    withdraw.getEnterMSISDNID().type(this.asmData.MobileNumber);
})

Then("click on proceed in O2C Withdrawal and purchase",function(){
    withdraw.getProceedID().click();
})

Then("Enter Amount and Remarks",function(){
    withdraw.getEtopupAmountFeild().type(this.O2CData.Amount)
    withdraw.getRemarksFeild().type(this.O2CData.Remarks)
})

Then("Click on withdraw button",function(){
    withdraw.getWithdrawID().click()
    withdraw.getWithdrawinConfirmationPage().click()
})

Then("Validate withdraw sucessful",function(){
    withdraw.getwithdrawsuccessfulID().should('contain.text','Withdrawal Successful')
    withdraw.getDoneButtonID()
})



