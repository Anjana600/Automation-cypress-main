/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import homePage from "../../../../../../../support/pageObjects/homePage";
import addBulkOperatorUser from "../../../../../../../support/pageObjects/addBulkOperatorUserPage";

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
const addBulkOperatorUser = new addBulkOperatorUser();
 
 
 
Then("Click on operator user", function () {
    cy.wait(3000);
    homePageScreen.getOperatorUser().click();
    cy.wait(3000);
});
Then("Click On bulk tab", function() {
    addBulkOperatorUser.getBulkTab().click();
    cy.wait(3000);
});
Then("Click and select category", function() {
    addBulkOperatorUser.getCategory().click();
    addBulkOperatorUser.getSelectCategory().click();
});

Then("Enter batch name", function() {
    cy.get(messageGatewayPage.getBatchname()).type("Pretups");
});
Then("Click On Download Template", function() {
    addBulkOperatorUser.getDownloadTemplate().click();
    cy.wait(6000);
});
Then("Click On Choose Template", function() {
    addBulkOperatorUser.getChooseTemplate().click();
});
Then("Click On submit", function() {
    addBulkOperatorUser.getSubmit().click();
});
Then("Click On confirm", function() {
    addBulkOperatorUser.getConfirm().click();
});
Then("Click On doneid", function() {
    addBulkOperatorUser.getDoneid().click();
});