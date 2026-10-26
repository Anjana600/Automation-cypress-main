/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import homePage from "../../../../../../support/pageObjects/homePage";
import c2sBulkPage from "../../../../../../support/pageObjects/c2sBulkPage";
 
 import {
  Given,
  When,
  Then,
  And,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";
 
//-----------------OBJECT DECLARATION-----------------------
const c2sBulkPageScreen = new c2sBulkPage;
const homePageScreen = new homePage()

Then("Click on channel to channel For c2sBulk", function(){
  homePageScreen.getChannelToChannel().click({ force: true });
  cy.wait(2000)
})

Then("Click on Bulk Operation For c2sBulk", function(){
    c2sBulkPageScreen.getBulkOperation().click();
    cy.wait(2000)
})


Then("Click on Bulk Prepaid Operation For c2sBulk", function(){
    c2sBulkPageScreen.getBulkPrepaidOperation().click();
})

Then("Click on Download Template For c2sBulk", function(){
    c2sBulkPageScreen.getDownloadTemplate().click();
})

 Then("Click on Upload File For c2sBulk", function(){
    c2sBulkPageScreen.getUploadFile().type(this.CTCW.ten);

})
  
Then("Click on Schedule Now For c2sBulk", function(){
    c2sBulkPageScreen.getScheduleNow().type(this.CTCW.remarks);
    cy.wait
 })

Then("Click on Date For c2sBulk", function(){
    c2sBulkPageScreen.getDate().type(this.CTCW.remarks);
    cy.wait
 })

Then("Click on Occurrence For c2sBulk", function(){
    c2sBulkPageScreen.getOccurrence().type(this.CTCW.remarks);
    cy.wait
})

Then("Click on No Of Days For c2sBulk", function(){
    c2sBulkPageScreen.getNoOfDays().type(this.CTCW.remarks);
    cy.wait
 })

 Then("Click on Submit For c2sBulk", function(){
    c2sBulkPageScreen.getSubmit().type(this.CTCW.remarks);
    cy.wait
 })



   
    
    