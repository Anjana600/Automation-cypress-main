/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import homePage from "../../../../../../support/pageObjects/homePage";
import associateO2CTransferRulePage from "../../../../../../support/pageObjects/associateO2CTransferRulePage";
 
 import {
  Given,
  When,
  Then,
  And,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";
 
//-----------------OBJECT DECLARATION-----------------------
const associateO2CTransferRuleScreen = new associateO2CTransferRulePage();
const homePageScreen = new homePage()


Then("Click on Transfer Rule", function(){
  homePageScreen.getTransferRuleId().click({ force: true });
  cy.wait(2000)
})

Then("Click on O2C", function(){
    associateO2CTransferRuleScreen.getO2C().click();
    cy.wait(2000)
})


Then("Select Domain", function(){
    associateO2CTransferRuleScreen.getSelectDomain().click();
    associateO2CTransferRuleScreen.getDomainDropdown().click();

})

Then("Click on Proceed", function(){
    associateO2CTransferRuleScreen.getProceed().click();
  })

 Then("Click on AddTransferRule", function(){
    associateO2CTransferRuleScreen.getAddTransferRule().click();
  })
  
  Then("Enter Mandatory Details", function(){
    associateO2CTransferRuleScreen.getCategoryDropdown().click();
    associateO2CTransferRuleScreen.getSelectFromCategoryDropdown().click();
    associateO2CTransferRuleScreen.getFirstApprovalLimit().type(this.tcp.ten);
    associateO2CTransferRuleScreen.getSecondApprovalLimit().type(this.tcp.hundred);
    associateO2CTransferRuleScreen.getSelectPostETopup().check({ force: true });
    cy.wait
    
})

Then("Click on AddButton", function(){
    associateO2CTransferRuleScreen.getAddButton().click();
  })

  Then("Check if O2CTransferRuleSuccessMsg Is Present", function(){
    associateO2CTransferRuleScreen.getSuccessMsg().should('be.visible')
    })
    