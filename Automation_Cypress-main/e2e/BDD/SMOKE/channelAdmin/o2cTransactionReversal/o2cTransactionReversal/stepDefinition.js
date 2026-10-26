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


Then("Click on O2C Reversal", function(){
  homePageScreen.geto2cTransactionReversal().click({ force: true });
  cy.wait(2000)
})
Then("Enter Transaction ID for O2C Reversal", function(){
    TransactionReversalScreen.getTxnIdField().type(this.CTCTR.O2cTxnId);
    cy.wait(2000)
})

Then("Click on Proceed Button for O2C reversal", function(){
    TransactionReversalScreen.getProceedButton().click();
    cy.wait(2000)
})

Then("Click on Reversal Button for O2C", function(){
    TransactionReversalScreen.geto2creversalButton().click();
cy.wait(2000)
})

Then("Enter Remarks For O2C Reversal", function(){
    cy.wait(3000)
    TransactionReversalScreen.getRemarksFieldforO2C().type(this.CTCTR.remarks);

})

Then("Click on Reversal Transaction for O2C", function(){
    TransactionReversalScreen.getReversalTransactionforO2c().click();
})

Then("Click on Yes Reversal Transaction for O2C", function(){
    TransactionReversalScreen.getYesForReversalTransaction().click({force: true});
})
Then("check for SuccessMsg for O2CReversal", function(){
    TransactionReversalScreen.getSuccessMsgForReversalTransaction().should('be.visible')
    cy.wait
        })    
  

   
    
    