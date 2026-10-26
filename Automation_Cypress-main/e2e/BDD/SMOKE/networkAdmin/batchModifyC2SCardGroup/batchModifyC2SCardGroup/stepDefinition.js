/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import homePage from "../../../../../../support/pageObjects/homePage";
import batchModifyC2SCardGroupPage from "../../../../../../support/pageObjects/batchModifyC2SCardGroupPage";
 
 import {
  Given,
  When,
  Then,
  And,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";
 
//-----------------OBJECT DECLARATION-----------------------
const batchModifyC2SCardGroupPageScreen = new batchModifyC2SCardGroupPage();
const homePageScreen = new homePage()


Then("Click on CardGroup For batchModifyC2SCardGroup", function(){
  homePageScreen.getCardGroup().click({ force: true });
  cy.wait(2000)
})

Then("Click on Bulk For batchModifyC2SCardGroup", function(){
    batchModifyC2SCardGroupPageScreen.getBulk().click();
    cy.wait(2000)
})


Then("Select From serviceTypeDropdown For batchModifyC2SCardGroup", function(){
    batchModifyC2SCardGroupPageScreen.getServiceTypeDropdown().click();
    batchModifyC2SCardGroupPageScreen.getSelectFromServiceTypeDropdown().click();
    
})

Then("Select Date For batchModifyC2SCardGroup", function(){
    batchModifyC2SCardGroupPageScreen.getDate().click();
  })

 Then("Click SelectAll For batchModifyC2SCardGroup", function(){
    batchModifyC2SCardGroupPageScreen.getSelectAll().click();
  })
  
  Then("Download File For batchModifyC2SCardGroup", function(){
    batchModifyC2SCardGroupPageScreen.getDownloadFile().click();
    cy.wait
    })

  Then("Upload File For batchModifyC2SCardGroup", function(){
  batchModifyC2SCardGroupPageScreen.getUploadFile().click();
  cy.wait
  
})

Then("Click on Submit For batchModifyC2SCardGroup", function(){
    batchModifyC2SCardGroupPageScreen.getSubmit().click();
  })


    