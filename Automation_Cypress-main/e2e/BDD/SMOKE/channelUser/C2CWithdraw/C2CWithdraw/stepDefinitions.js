/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import C2CWithdrawal from "../../../../../../support/pageObjects/C2CWithdrawal";
import {
    Given,
    When,
    Then,
    And,
    Before,
  } from "@badeball/cypress-cucumber-preprocessor";

//-----------------OBJECT DECLARATION-----------------------
const withdraw= new C2CWithdrawal();

When("Click on C2C Withdrawal",function(){
    withdraw.getWithdrawalIcon().click();
})

When("Enter Amount for Etopup in withdrawal",function(){
    withdraw.getAmountforWithdrawal().type(this.C2CData.OrderAmount)
})

Then("Enter remarks in C2C withdraw",function(){
    withdraw.getRemarksforwithdraw().type(this.C2CData.Remarks)
})

Then("Click on withdraw button for C2C withdraw",function(){
    withdraw.getWithdrawButton().click();
})

Then("Verify withdraw sucessful",function(){
    withdraw.getWithdrawButtoninPinPage().click();
    withdraw.getWithdrawSuccessfulText().should('contain.text','Withdrawal Successful')
    withdraw.getDoneButton().click();
})

