/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import userHeirarcyPage from "../../../../../../support/pageObjects/userHeirarcy";
 
import {
  Given,
  When,
  Then,
  And,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";
import { randomInt } from "appium-webdriveragent/build/lib/utils";
 
//-----------------OBJECT DECLARATION-----------------------
const userHeirarcyPage = new userHeirarcyPage();

Then("Click on user Heirarcy", function () {
    userHeirarcyPage.getUserHeirarchy().click();
});
Then("Enter mobile number", function () {
    cy.get(userHeirarcyPage.getMobileNumber()).type(this.userData.MobileNumber);
    cy.wait(2000);
});
Then("Click On Proceed", function () {
    userHeirarcyPage.getProceedButton().click();
});
Then("Enter mobile number for transfer hierarchy", function () {
    cy.get(userHeirarcyPage.getMobileNumber()).type(this.userData.TransferHierarchy_MobileNumber);
    cy.wait(2000);
});
Then("Click On Select User", function () {
    userHeirarcyPage.getSelectUser().click();
});
Then("Click On Select User From Dropdown", function () {
    userHeirarcyPage.getSelectUserFromDropdown().click();
});
Then("Click On Go btn", function () {
    userHeirarcyPage.getGoBtn().click();
});
Then("Click On Suspended or Transfer Heirarchy", function () {
    userHeirarcyPage.getSuspendedOrTransferHeirarchy().click();
});
Then("Click On Suspended Heirarchy Proceed Btn", function () {
    userHeirarcyPage.getSuspendedHeirarchyProceedBtn().click();
});
Then("Click On Suspended Heirarchy Done Btn", function () {
    userHeirarcyPage.getSuspendedHeirarchyDoneBtn().click();
});
Then("Click and Select Geographical Domain", function () {
    userHeirarcyPage.getGeographicalDomain().click();
    userHeirarcyPage.getSelectGeographicalDomain().click();
});
Then("Click On Owner or parent user and search", function () {
    userHeirarcyPage.getOwnerOrParentUser().type('%');
    userHeirarcyPage.getSearch().click();
});
Then("Select the Owner and submit", function () {
    userHeirarcyPage.getSelectOwner().click();
    userHeirarcyPage.getOwnerSubmit().click();
});
Then("Click On Heirarchy ProceedBtn", function () {
    userHeirarcyPage.getHeirarchyProceedBtn().click();
});
Then("Click On Heirarchy Done Btn", function () {
    userHeirarcyPage.getHeirarchyDoneBtn().click();
});




