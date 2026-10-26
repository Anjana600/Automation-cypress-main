/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import homePage from "../../../../../../../support/pageObjects/homePage";
import bulkChannelUserCreationPage from "../../../../../../../support/pageObjects/bulkChannelUserCreationPage";
 import {
  Given,
  When,
  Then,
  And,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";
 
//-----------------OBJECT DECLARATION-----------------------
const bulkChannelUserCreationPageScreen = new bulkChannelUserCreationPage();
const homePageScreen = new homePage()

Then("Click on Channel User For bulk Channel User Creation", function(){
  homePageScreen.getuserBarringManagement().click({ force: true });
  cy.wait(2000)
})

Then("Click on BulkOperation For bulk Channel User Creation", function(){
    bulkChannelUserCreationPageScreen.getBulkOperation().click();
    cy.wait(2000)
})
Then("Enter BatchName For bulk Channel User Creation", function(){
    bulkChannelUserCreationPageScreen.getBatchName().click();
    cy.wait(2000)
})

Then("Select From Domain Dropdown For bulk Channel User Creation", function(){
    bulkChannelUserCreationPageScreen.getDomainDropdown().click();
    bulkChannelUserCreationPageScreen.getSelectFromDomainDropdown().click();
})

Then("Select From Geography Dropdown For bulk Channel User Creation", function(){
    bulkChannelUserCreationPageScreen.getGeographyDropdown().click({ multiple: true });
    bulkChannelUserCreationPageScreen.getSelectFromGeographyDropdown().click({ multiple: true });
})

Then("Download Blank Template For bulk Channel User Creation", function(){
    bulkChannelUserCreationPageScreen.getDownloadBlankTemplate().click();

})
  
Then("Click On Upload File For bulk Channel User Creation", function(){
    bulkChannelUserCreationPageScreen.getUploadFile().click();
   })

Then("Click On Submit For bulk Channel User Creation", function(){
    bulkChannelUserCreationPageScreen.getSubmit().click();
   })
   
    
    