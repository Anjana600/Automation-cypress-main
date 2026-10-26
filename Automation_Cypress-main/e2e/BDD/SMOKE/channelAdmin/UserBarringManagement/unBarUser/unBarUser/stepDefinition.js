/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import homePage from "../../../../../../../support/pageObjects/homePage";
import userBarringManagementPage from "../../../../../../../support/pageObjects/userBarringManagementPage";
 import {
  Given,
  When,
  Then,
  And,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";
 
//-----------------OBJECT DECLARATION-----------------------
const userBarringManagementScreen = new userBarringManagementPage();
const homePageScreen = new homePage()

Then("Click on User Barring Management To UnBar User", function(){
  homePageScreen.getuserBarringManagement().click({ force: true });
  cy.wait(2000)
})

Then("Click on UnBarUser", function(){
    userBarringManagementScreen.getUnbarUser().click();
    cy.wait(2000)
})

Then("Click on Bulk To UnBar User", function(){
    userBarringManagementScreen.getBulk().click();
})

Then("Select From Module Dropdown To UnBar User", function(){
    userBarringManagementScreen.getModuleDropdown().click({ multiple: true });
    userBarringManagementScreen.getSelectFromModuleDropdown().click();
  })

 Then("Select From Barred as Drodown To UnBar User", function(){
    userBarringManagementScreen.getBarredAsDropdown().click();
    userBarringManagementScreen.getSelectFromBarredAsDropdown().click();

})
  
  Then("Select From Barring Type Dropdown To UnBar User", function(){
    userBarringManagementScreen.getBarringTypeDropdown().type(this.CTCW.remarks);
    userBarringManagementScreen.getSelectFromBarringTypeDropdown().type(this.CTCW.remarks);
   })

   Then("Select From Barring Reason Dropdown To UnBar User", function(){
    userBarringManagementScreen.getBarringReasonDropdown().type(this.CTCW.remarks);
    userBarringManagementScreen.getSelectFromBarringReasonDropdown();
   })
   Then("Click on Upload File To UnBar User", function(){
    userBarringManagementScreen.getUploadFile();
   })
   Then("Click on Submit To UnBar User", function(){
    userBarringManagementScreen.getSumbit();
   })
   
    
    