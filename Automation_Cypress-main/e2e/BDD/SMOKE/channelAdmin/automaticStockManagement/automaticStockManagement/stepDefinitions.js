/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import homePage from "../../../../../../support/pageObjects/homePage";
import automaticStockManagement from "../../../../../../support/pageObjects/automaticStockManagement";
import {
    Given,
    When,
    Then,
    And,
    Before,
  } from "@badeball/cypress-cucumber-preprocessor";

//-----------------OBJECT DECLARATION-----------------------
const homeScreen= new homePage();
const asm= new automaticStockManagement();

When("Click on automatic stock management",function(){
    homeScreen.getAutomaticStockManagementID().click();
    cy.wait(2000);
})

Then("Enter user mobile number",function(){
     asm.getMSISDNID().type(this.asmData.MobileNumber)
})

Then("Click on proceed",function(){
  asm.getMSISDNProceedID().click()
})

Then("Disable and Enable SOS transfer allowed",function(){
  asm.getSOSTransferToggleButton().click()
  cy.wait(2000)
})

Then("Disable and Enable Auto C2C allowed",function(){
  asm.getAutoC2CToggleButton().click()
  cy.wait(2000)
})

Then("Click on submit",function(){
  asm.getSubmitButton().click()
  asm.getSuccessMessage().should('contain.text','Association for SOS and auto C2C is Successful')
  asm.getDoneButton().click()
})

Then("Click on Bulk Operation for automatic stock management",function(){
  asm.getBulkOperationID().click()
})

Then("Choose domain for Automatic Stock Management",function(){
  asm.getDomainDropdown().click()
  asm.getDomainValue().click()
})

Then("Choose Geography for Automatic Stock Management",function(){
  asm.getGeographyDropdown().click()
  asm.getGeographyValue().click({force: true})
})

Then("Download the template file for Automatic Stock Management",function(){
  asm.getDownloadTemplateID().click()
  cy.wait(3000)
})

Then("Rename downloaded file",function(){

})

Then("Edit the details and Upload the file",function(){
  asm.getChooseFileID().click()
})

Then("Click on submit for automatic stock management bulk operation",function(){
  asm.getSubmitButton().click()
})
