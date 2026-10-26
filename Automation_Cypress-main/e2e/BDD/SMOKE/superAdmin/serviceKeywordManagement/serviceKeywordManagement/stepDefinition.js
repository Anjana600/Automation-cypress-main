/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import homePage from "../../../../../../support/pageObjects/homePage";
import serviceKeywordManagement from "../../../../../../support/pageObjects/serviceKeywordManagement";
 
 import {
  Given,
  When,
  Then,
  And,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";
 
//-----------------OBJECT DECLARATION-----------------------
const serviceKeywordManagementScreen = new serviceKeywordManagement();
const homePageScreen = new homePage()


Then("Click on Service Keyword Management", function(){
  homePageScreen.getServiceKeywordManagementId().click({ force: true });
  cy.wait(2000)
})

Then("Click on Add Button", function(){
   serviceKeywordManagementScreen.getAddBtn().click();
    cy.wait(2000)
})

Then("Click on Entering Mandatory fields", function(){
    serviceKeywordManagementScreen.getServiceTypeDropdown().click();
    cy.wait(2000)
    serviceKeywordManagementScreen.getSelectFromServiceTypeDropdown().click();
    cy.generateRandomLetters(3).then((value) =>{
      console.log(value)
      serviceKeywordManagementScreen.getkeyword().type(value)
    })
    serviceKeywordManagementScreen.getMessageGatewayTypeDropdown().click();
    cy.wait(2000)
    serviceKeywordManagementScreen.getSelectMessageGatewayTypeDropdown().click();
    cy.generateRandomNumber(4).then((value) =>{
      console.log(value)
      serviceKeywordManagementScreen.getReceivePort().type(value);
    })
    cy.generateRandomLetters(4).then((value) =>{
      console.log(value)
      serviceKeywordManagementScreen.getName().type(value)
    })
    serviceKeywordManagementScreen.getStatusTypeDropdown().click();
    cy.wait(2000)
    serviceKeywordManagementScreen.getSelectFromStatusTypeDropdown().click();
})

Then("Click on Proceed Button", function(){
  serviceKeywordManagementScreen.getProceedBtn().click();
})

Then("Check if SuccessMsg Is Present", function(){
  serviceKeywordManagementScreen.getSuccessMsg().should('be.visible')
  })
  

