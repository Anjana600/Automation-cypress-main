/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import homePage from "../../../../../../support/pageObjects/homePage";
import barringTypePage from "../../../../../../support/pageObjects/barringTypePage";
 
 import {
  Given,
  When,
  Then,
  And,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";
 
//-----------------OBJECT DECLARATION-----------------------
const barringTypeScreen = new barringTypePage();
const homePageScreen = new homePage()

Then("Click on SubLookup Management", function(){
    homePageScreen.getsSublookupManagement().click({force: true});
    cy.wait(2000)
})
Then("Selecting From LookUpName Dropdown", function(){
    barringTypeScreen.getLookupNameDropdown().click();
    barringTypeScreen.getSelectFromLookupnamedropdown().click();
    cy.wait(2000)
})

Then("Click on ProceedButton", function(){
    barringTypeScreen.getProceedButton().click();
    cy.wait(2000)
})

Then("Click AddButton", function(){
    barringTypeScreen.getAddButton().click();
})

Then("Entering SubLookUpNameField", function(){
    barringTypeScreen.getSublookupNameField().type(this.serviceKeyword.name);
  })

  Then("Click Add", function(){
    barringTypeScreen.getaddbtn().click();
  })
  
  Then("Check if SublookSuccessMsg Is Present", function(){
    barringTypeScreen.getSublookSuccessMsg().should('be.visible')
    })
  

