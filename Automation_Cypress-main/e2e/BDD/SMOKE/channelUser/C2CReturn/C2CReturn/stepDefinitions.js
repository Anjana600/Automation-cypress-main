/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import C2CReturn from "../../../../../../support/pageObjects/C2CReturn";
import {
    Given,
    When,
    Then,
    And,
    Before,
  } from "@badeball/cypress-cucumber-preprocessor";

//-----------------OBJECT DECLARATION-----------------------
const C2C= new C2CReturn();

Then("Click on Return",function(){
    C2C.getReturnID().click();
})

Then("Select the Search by",function(){
    C2C.getSelectDropdownID().click();
    C2C.getMSISDNinSearchID().click();
})

Then("Enter MobileNumber",function(){
    C2C.getEnterMSISDNField().type(this.C2CReturn.MobileNumberforReturn);
})

Then("click on proceed",function(){
    C2C.getProceedButtonID().click();
})

Then("Enter the amount to be returned and Remarks",function(){
    C2C.getAmountFeildID().type(this.C2CReturn.Amount);
    C2C.getRemarksFeildID().type(this.C2CReturn.Remarks);
})

Then("click on Return",function(){
    C2C.getReturnButtonID().click({force: true});
})

Then("Enter PIN after Reviewing the details",function(){
    C2C.getPinFieldID().type(this.C2CReturn.Pin);
    cy.wait(2000);
})

Then("Click on return and done button",function(){
    C2C.getReturnIDinPinPage().click();
    C2C.getReturnSucessfullID().should('contain.text','Return Successful');
    C2C.getDoneButtonID().click();
})