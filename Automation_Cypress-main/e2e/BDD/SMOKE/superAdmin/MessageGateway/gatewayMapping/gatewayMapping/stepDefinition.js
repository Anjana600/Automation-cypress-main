/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import homePage from "../../../../../../../support/pageObjects/homePage";
import gatewayMappingPage from "../../../../../../../support/pageObjects/gatewayMappingPage";
import "../../../../../../../support/Utils/generic"
 
import {
  Given,
  When,
  Then,
  And,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";
// import { randomInt } from "appium-webdriveragent/build/lib/utils";
//-----------------OBJECT DECLARATION-----------------------
const homePageScreen = new homePage();
const gatewayMappingPageScreen = new gatewayMappingPage();
 
 
Then("Click on message Gateway", function () {
    cy.wait(3000);
    homePageScreen.getMessageGatewayId().click();
    cy.wait(3000);
});

Then("Click on Gateway Mapping", function () {
    homePageScreen.getGatewayMapping().click();
});
 
Then("Click On Response Gateway", function() {
    gatewayMappingPageScreen.getResponseGateway().click();
});

Then("Select Response Gateway", function() {
    gatewayMappingPageScreen.getSelectResponseGateway().click();
});

Then("Click On Alternative Response Gateway", function() {
    gatewayMappingPageScreen.getAlternativeResponseGateway().click();
});

Then("Select Alternative Response Gateway", function() {
    gatewayMappingPageScreen.getSelectAlternativeResponseGateway().click();
    cy.wait(3000);
});

Then("click Proceed", function() {
    gatewayMappingPageScreen.getProceedBtn().click;
    cy.wait(2000);
});

Then("click Confirm", function() {
    gatewayMappingPageScreen.getConfirmBtn().click;
    cy.wait(2000);
});
Then("click Done", function() {
    gatewayMappingPageScreen.getDoneBtn().click;
    cy.wait(2000);
});