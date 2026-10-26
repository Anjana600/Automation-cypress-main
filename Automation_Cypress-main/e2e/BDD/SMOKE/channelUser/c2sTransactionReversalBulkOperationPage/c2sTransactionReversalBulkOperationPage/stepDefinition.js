/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import homePage from "../../../../../../support/pageObjects/homePage";
import c2sTransactionReversalBulkOperationPage from "../../../../../../support/pageObjects/c2sTransactionReversalBulkOperationPage";
 
 import {
  Given,
  When,
  Then,
  And,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";

 
//-----------------OBJECT DECLARATION-----------------------
const c2sTransactionReversalBulkOperationPageScreen = new c2sTransactionReversalBulkOperationPage();
const homePageScreen = new homePage()


Then("Click on C2S Transaction Reversal", function(){
  homePageScreen.getc2sTransactionReversal().click({ force: true });
  cy.wait(2000)
})

Then("Click on Bulk Operation For C2S Transaction Reversal", function(){
    c2sTransactionReversalBulkOperationPageScreen.getBulkOperation().click();
    cy.wait(2000)
})


Then("Click on Download File Template C2S Transaction Reversal", function(){
    c2sTransactionReversalBulkOperationPageScreen.getDownloadFileTemplate().click();
})

Then("Click on Enter Batch Name C2S Transaction Reversal", function(){
    c2sTransactionReversalBulkOperationPageScreen.getEnterBatchName().click();
 })

 Then("Click on Upload File C2S Transaction Reversal", function(){
    c2sTransactionReversalBulkOperationPageScreen.getUploadFile().type(this.CTCW.ten);

})
  
  Then("Click on Proceed C2S Transaction Reversal", function(){
    c2sTransactionReversalBulkOperationPageScreen.getProceed().type(this.CTCW.remarks);
    cy.wait
   
})


   
    
    