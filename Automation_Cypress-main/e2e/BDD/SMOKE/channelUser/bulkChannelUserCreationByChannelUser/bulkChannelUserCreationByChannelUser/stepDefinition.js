/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import homePage from "../../../../../../support/pageObjects/homePage";
import bulkChannelUserCreationByChannelUser from "../../../../../../support/pageObjects/bulkChannelUserCreationByChannelUser";
 
 import {
  Given,
  When,
  Then,
  And,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";
 
//-----------------OBJECT DECLARATION-----------------------
const bulkChannelUserCreationByChannelUserScreen = new bulkChannelUserCreationByChannelUser();
const homePageScreen = new homePage()


Then("Click on Channel User For bulkChannelUserCreationByChannelUser", function(){
  homePageScreen.getChannelToChannel().click({ force: true });
  cy.wait(2000)
})

Then("Click on Bulk For bulkChannelUserCreationByChannelUser", function(){
    bulkChannelUserCreationByChannelUserScreen.getBulk().click();
    cy.wait(2000)
})


Then("Click on Batch Name For bulkChannelUserCreationByChannelUser", function(){
    bulkChannelUserCreationByChannelUserScreen.getBatchName().click();
})

Then("Click on Download Template For bulkChannelUserCreationByChannelUser", function(){
    bulkChannelUserCreationByChannelUserScreen.getDownloadTemplate().click();
 })

 Then("Click on Upload File For bulkChannelUserCreationByChannelUser", function(){
    bulkChannelUserCreationByChannelUserScreen.getUploadFile().type(this.CTCW.ten);

})
  
  Then("Click on Submit For bulkChannelUserCreationByChannelUser", function(){
    bulkChannelUserCreationByChannelUserScreen.getSubmit().type(this.CTCW.remarks);
    cy.wait
   
})


   
    
    