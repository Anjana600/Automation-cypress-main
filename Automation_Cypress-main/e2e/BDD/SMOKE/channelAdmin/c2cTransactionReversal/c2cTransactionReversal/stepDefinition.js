/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import homePage from "../../../../../../support/pageObjects/homePage";
import TransactionReversalPage from "../../../../../../support/pageObjects/TransactionReversalPage";
 
 import {
  Given,
  When,
  Then,
  And,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";
 
//-----------------OBJECT DECLARATION-----------------------
const TransactionReversalScreen = new TransactionReversalPage();
const homePageScreen = new homePage()


Then("Click on C2C Reversal", function(){
  homePageScreen.getc2cTransactionReversal().click({ force: true });
  cy.wait(2000)
})
Then("Enter Transaction ID", function(){
    TransactionReversalScreen.getTxnIdField().type(this.CTCTR.c2cTxnId);
    cy.wait(2000)
})

Then("Click on Proceed Button for C2C reversal", function(){
    TransactionReversalScreen.getProceedButton().click();
    cy.wait(2000)
})

Then("Click on Reversal Button", function(){
    TransactionReversalScreen.getreversalButton().click();
cy.wait(2000)
})

Then("Enter Remarks For C2C Reversal", function(){
    cy.wait(3000)
    TransactionReversalScreen.getRemarksField().type(this.CTCTR.remarks);

})

Then("Click on Reversal Transaction for C2C", function(){
    TransactionReversalScreen.getReversalTransaction().click();
})

Then("Click on Yes Reversal Transaction for C2C", function(){
    TransactionReversalScreen.getYesForReversalTransaction().click();
})
Then("check for SuccessMsg for c2cReversal", function(){
    TransactionReversalScreen.getSuccessMsgForReversalTransaction().should('be.visible')
    cy.wait
        })    
  

   
    
    