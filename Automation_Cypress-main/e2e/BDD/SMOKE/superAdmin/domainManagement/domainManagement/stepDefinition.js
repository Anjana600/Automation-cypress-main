/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import homePage from "../../../../../../support/pageObjects/homePage";
import domainManagementPage from "../../../../../../support/pageObjects/domainManagementPage";
 
 import {
  Given,
  When,
  Then,
  And,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";
 //-----------------OBJECT DECLARATION-----------------------
const domainManagementScreen = new domainManagementPage();
const homePageScreen = new homePage()

Then("Click on ChannelDomain", function(){
    homePageScreen.getsChannelDomain().click({force: true});
    cy.wait(2000)
})
Then("click on addDomain", function(){
    domainManagementScreen.getaddDomain().click();
    cy.wait(2000)
})

Then("Add Domain Details", function(){
   domainManagementScreen.getDomainDropdown().click();
    domainManagementScreen.getSelectFromDomainDropdown().click();
    domainManagementScreen.getDomaincode().type(this.domainManagement.domainCode);
    domainManagementScreen.getDomainName().type(this.domainManagement.domainName);
    domainManagementScreen.getNoOfCategories().type(this.domainManagement.Noofcategories);
    cy.wait(2000)
})

   Then("click proceedToAddDomain", function(){
    domainManagementScreen.getproceed().click()
    })

 Then("Enter Category Details", function(){
    domainManagementScreen.getCategoryCode().type(this.domainManagement.domainCode)
    domainManagementScreen.getCategoryName().type(this.domainManagement.domainCode)
    domainManagementScreen.getGeographyDropdown().click()
    domainManagementScreen.getSelectFromGeographyDropdown().click()
    domainManagementScreen.getRoletypeDropdown().click()
    domainManagementScreen.getSelectFromRoletypeDropdown().click()
    domainManagementScreen.getUserIdPrefix().type(this.domainManagement.domainCode)
 })
 Then("click Next", function(){
    domainManagementScreen.getNext().click()
    })


 Then("Enter Owner Role Details", function(){
    domainManagementScreen.getOwnerRoleDetailsSelectAll().click()
    domainManagementScreen.getNext1().click()
      })

 Then("Enter Owner Allowed Sources", function(){
    domainManagementScreen.getOwnerAllowedSourcesSelectAll().click()
    domainManagementScreen.getNext2().click()
        })

 Then("Enter Owner Login Details", function(){
    domainManagementScreen.getOwnerLoginDetailsSelectAll().click()
    domainManagementScreen.getMinTxn().type(this.domainManagement.one)  
    domainManagementScreen.getMaxLoginCount().type(this.domainManagement.one)
    domainManagementScreen.getAuthenticationDropdown().click()
    domainManagementScreen.getSelectFromAuthenticationDropdown().click()
    domainManagementScreen.getRestrictedListManagementSelectAll().click()
    domainManagementScreen.getSaveAndSubmit().click()
       })

  Then("Check for Domain Added Successfully Msg", function(){
     domainManagementScreen.getDomainAddedSuccessMsg().should('be.visible')
       })
        
    

