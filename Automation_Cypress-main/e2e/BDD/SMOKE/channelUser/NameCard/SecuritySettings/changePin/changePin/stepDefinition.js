/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import homePage from "../../../../../../support/pageObjects/homePage";
import changePinPage from "../../../../../../../../support/pageObjects/changePinPage";
 
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
const changePinPage = new changePinPage();

Then("Click on Security Settings", function () {
    changePinPage.getSecuritySettings().click();
});
Then("Click on Pin", function () {
    homePageScreen.getPin().click();
});
Then("Enter Old Pin", function () {
    changePinPage.getOldPin().click();
});
Then("Enter New Pin", function () {
    changePinPage.getNewPin().click();
});
Then("Click on Confirm Pin", function () {
    changePinPage.getConfirmPin().click();
});
Then("Click on Remarks", function () {
    changePinPage.getRemarks().click();
});
Then("Click on Change Pin SubmitBtn", function () {
    changePinPage.getChangePinSubmitBtn().click();
});
Then("Click on Confirm YesBtn", function () {
    changePinPage.getConfirmYesBtn().click();
});
Then("Click on Change Pin DoneBtn", function () {
    changePinPage.getChangePinDoneBtn().click();
});
