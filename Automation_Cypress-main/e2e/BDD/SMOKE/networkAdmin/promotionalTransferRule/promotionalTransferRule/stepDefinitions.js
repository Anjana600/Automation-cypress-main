/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import homePage from "../../../../../../support/pageObjects/homePage";
import promotionalTransferRule from "../../../../../../support/pageObjects/promotionalTransferRule";
import {
    Given,
    When,
    Then,
    And,
    Before,
  } from "@badeball/cypress-cucumber-preprocessor";

//-----------------OBJECT DECLARATION-----------------------
const homescreen = new homePage();
const ptr = new promotionalTransferRule();  


Then("Navigate to Transfer Rule > Promotional", function(){
    homescreen.getTransferRulesID().click();
    ptr.getTransferRulePromotionalID().click();
})

Then("click on Add Transfer Rule",function(){
    ptr.getAddTransferRuleID().click();
})

Then("Choose Promotional level", function(){
    ptr.getPromotionalLevelDropdownID().click();
    ptr.getGeographyDropdownValueID().click();
})

Then("choose Domain,Category and Grade", function(){
    ptr.getDomainDropdownID().click();
    ptr.getCorporateDomainID().click();
    ptr.getCategoryDropdownID().click();
    ptr.getCorporateAgentCategoryID().click();
})

Then("Choose Receiver Details", function(){
    ptr.getTypeDropdownID().click();
    ptr.getPrepaidSubscriberID().click();
})

Then("Select Card Group Set",function(){
    ptr.getSelectProviderGroupID().click();
    ptr.getnewProviderID().click();
    ptr.getStatusDropdownID().click();
    ptr.getActiveStatusID().click();
    ptr.getServiceTypeDropdownID().click();
    ptr.getCustomerRechargeID().click();
    ptr.getSubServiceDropdownID().click();
    ptr.getCVGSubserviceID().click();
    ptr.getCardGroupSetDropdownID().click();
    ptr.getCardGroupSetValueID().click();
})

Then("Select Date Range from Calendar", function(){
    ptr.getFromCalendarIconID().click();
    ptr.getSelectFromDateID().click();
    cy.wait(3000);
    ptr.getToCalendarIconID().click();
    ptr.getSelectToDateID().click();
})

Then("Click on save button",function(){
    ptr.getSaveButtonID().click();
})

Then("click on confirm button",function(){
    ptr.getConfirmButtonID().click({ force: true });
    ptr.getTransferRuleSucessPopup().should('contain.text',' Transfer rule is added successfully ')
    ptr.getDoneButtonID().click({ force: true });
})

Then("Search by Grade",function(){
    ptr.getSearchbyGradeID().click();
    cy.wait(2000);
})

Then("choose Domain,Category and Grade in Filter",function(){
    ptr.getDomainDropdowninFilter().click();
    ptr.getCorporateDomainID().click();
    ptr.getCategoryDropdowninFilter().click();
    ptr.getCorporateAgentCategoryID().click();  
    cy.wait(1000);
})

Then("Click on proceed button",function(){
    ptr.getProceedButtonID().click();
    cy.wait(3000);
})

Then("Click on Edit Button",function(){
    ptr.getEditID().click();
    cy.wait(2000);
})

Then("Add TimeStamp",function(){
    ptr.getTimestampID().type('09:30-06:30');
})

Then("click on done Button",function(){
    ptr.getsaveButtonID().click({force: true});
    ptr.getyesButtoninMofidyPageID().click({force: true});
    ptr.getDoneButtoninModifyPageID().click({force: true});
})

Then("click on delete button",function(){
    ptr.getDeleteButtonID().click();
    ptr.getyesButtonID().click({force: true});
})