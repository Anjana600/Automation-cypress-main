/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import homePage from "../../../../../../support/pageObjects/homePage";
import userMigrationAcrossDomain from "../../../../../../support/pageObjects/userMigrationAcrossDomain"
import {
  Given,
  When,
  Then,
  And,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";
 
//-----------------OBJECT DECLARATION-----------------------
const homescreen = new homePage();
const userMigrationAcrossDomainpage = new userMigrationAcrossDomain();

Then("click on User Migration Across Domain", function(){
    homescreen.getuserMigrationAcrossDomainID().click();
    cy.wait(2000)
});

Then("Select Domain Dropdown", function(){
    userMigrationAcrossDomainpage.getDomainDropdownID().click();
    userMigrationAcrossDomainpage.getCorporateinDropdownID().click({ force: true })
    cy.wait(2000)
});

Then("Download the template",function(){
     userMigrationAcrossDomainpage.getDownloadTemplateID().click();
     cy.wait(2000)
});

Then("Click on choose file",function(){
    userMigrationAcrossDomainpage.getChooseFileID();
})

