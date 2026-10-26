/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import homePage from "../../../../../../support/pageObjects/homePage";
import profilePage from "../../../../../../support/pageObjects/profilePage";
 
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
const profilePage = new profilePage();

Then("Click on Name Card", function () {
    cy.wait(3000);
    homePageScreen.getNameCard().click();
    cy.wait(2000);
});
Then("Click on profile", function () {
    profilePage.getProfile().click();
});
Then("Click On Service and Details", function () {
    profilePage.getServiceAndDetails().click();
});


