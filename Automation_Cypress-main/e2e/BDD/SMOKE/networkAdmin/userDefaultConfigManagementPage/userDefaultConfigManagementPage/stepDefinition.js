/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import homePage from "../../../../../../support/pageObjects/homePage";
import userDefaultConfigManagementPage from "../../../../../../support/pageObjects/userDefaultConfigManagementPage";
  import {
  Given,
  When,
  Then,
  And,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";
 
//-----------------OBJECT DECLARATION-----------------------
const userDefaultConfigManagementPageScreen = new userDefaultConfigManagementPage();
const homePageScreen = new homePage()


Then("Click on Profile Management For userDefaultConfigManagementPage", function(){
  homePageScreen.getProfileManagementId().click({ force: true });
  cy.wait(2000)
})

Then("Click on Bulk CategoryWise Default Profiles For userDefaultConfigManagementPage", function(){
    userDefaultConfigManagementPageScreen.getbulkCategoryWiseDefaultProfile().click();
    cy.wait(2000)
})


Then("Select Domain From Domain Dropdown For userDefaultConfigManagementPage", function(){
    userDefaultConfigManagementPageScreen.getSelectDomainDropdown().click();
    userDefaultConfigManagementPageScreen.getSelectFromDomainDropdown().click();
    
})

Then("Click on Download Template For userDefaultConfigManagementPage", function(){
   cy.wait(3000)
    userDefaultConfigManagementPageScreen.getDownloadTemplate().click();
    cy.wait(3000)
  })
  Then("Click on Choose File For userDefaultConfigManagementPage", function(){
    userDefaultConfigManagementPageScreen.getChooseFile().uploadFile('DefaultCon23jul.xls');
    cy.wait(5000); 
});
  
  Then("Click On Submit For userDefaultConfigManagementPage", function(){
    userDefaultConfigManagementPageScreen.getSubmit().click();
    
    
})




    