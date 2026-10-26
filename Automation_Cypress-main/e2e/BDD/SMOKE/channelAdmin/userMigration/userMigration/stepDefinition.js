/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import homePage from "../../../../../../support/pageObjects/homePage";
import userMigrationPage from "../../../../../../support/pageObjects/userMigrationPage";
 
import {
  Given,
  When,
  Then,
  And,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";
import { randomInt } from "appium-webdriveragent/build/lib/utils";
 
//-----------------OBJECT DECLARATION-----------------------
const homePageScreen = new homePage();
const userMigrationPage = new userMigrationPage();

Then("Click on user Migration Acroos Domaim", function () {
    cy.wait(3000);
    homePageScreen.getUserMigrationAcrossDomain().click();
    cy.wait(2000);
});

Then("Click on select type Dropdown", function () {
    userMigrationPage.getSelect().click();
});

Then("Select on Domain type", function () {
    userMigrationPage.getSelectDomainType().click();
});

Then("Click on download templete", function () {
    userMigrationPage.getDownloadTemplate().click();
    cy.wait(3000);
});

Then("Click on Upload templete", function () {
    userMigrationPage.getUploadTemplate().click();
});

Then("Click on Sumbit Button", function () {
    userMigrationPage.getSumbit().click();
});

Then("Click on Confirm Button", function () {
    userMigrationPage.getConfirm().click();
});

Then("Click on Done btn", function () {
    userMigrationPage.getDoneButton().click();
});