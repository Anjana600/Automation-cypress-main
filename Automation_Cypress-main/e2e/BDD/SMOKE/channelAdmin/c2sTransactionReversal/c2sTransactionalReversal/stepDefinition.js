/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import homePage from "../../../../../../support/pageObjects/homePage";
import c2sTransactionReversalPage from "../../../../../../support/pageObjects/c2sTransactionReversalPage";
 
 import {
  Given,
  When,
  Then,
  And,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";
 
//-----------------OBJECT DECLARATION-----------------------
const c2sTransactionReversalScreen = new c2sTransactionReversalPage();
const homePageScreen = new homePage()


Then("Click on C2S Reversal", function(){
  homePageScreen.getc2sTransactionReversal().click({ force: true });
  cy.wait(2000)
})
Then("Enter Transaction ID for C2S Reversal", function(){
    c2sTransactionReversalScreen.getTxnIdField().type(this.CTSTR.c2sTxnId);
    cy.wait(2000)
})
Then("Enter Channel User Mobile Number for C2S reversal", function(){
    c2sTransactionReversalScreen.getChannelUserMobileNo().type(this.CTSTR.ChannelUserMobileNo);
    cy.wait(2000)
})

Then("Click on Proceed Button for C2S reversal", function(){
    c2sTransactionReversalScreen.getProceedButton().click();
    cy.wait(2000)
})

Then("Click on Reversal Button for C2S reversal", function(){
    c2sTransactionReversalScreen.getreversAmountButton().click();
    cy.wait(2000)
})

Then("Click on Reversal Button2 for C2S reversal", function(){
    c2sTransactionReversalScreen.getreverseAmountButton2().click({force: true});
    cy.wait(5000)
})

Then("check for SuccessMsg for C2S Reversal", function(){
    cy.wait(2000)
    c2sTransactionReversalScreen.getSuccessMsgForC2SReversalTransaction().should('be.visible')
   
        })    
  

   
    
    