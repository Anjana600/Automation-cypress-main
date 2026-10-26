/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import viewChannelUserDetails from "../../../../../../support/pageObjects/viewChannelUserDetails";
 
import {
  Given,
  When,
  Then,
  And,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";
 
//-----------------OBJECT DECLARATION-----------------------
const viewChannelUserDetails = new viewChannelUserDetails();

Then('check that channel user name is visible', () => {
    cy.get(viewChannelUserDetails.getChannelUserName()).should('be.visible');
    //cy.get(viewChannelUserDetails.getChannelUserName()).should('exist');
});
Then('check that channel user category is visible', () => {
    cy.get(viewChannelUserDetails.getChannelUserCategory()).should('be.visible');
});
Then('check that channel user mobile number is visible', () => {
    cy.get(viewChannelUserDetails.getChannelUserMobileNumber()).should('be.visible');
});
Then('check that channel user email is visible', () => {
    cy.get(viewChannelUserDetails.getChannelEmail()).should('be.visible');
});
Then("Click On Add Widget", function () {
    viewChannelUserDetails.getAddWidget().click();
});
Then("Click and select Graph", function () {
    viewChannelUserDetails.getGraphDropdown().click();
    viewChannelUserDetails.getSelectGraph().click();
});
Then("Click on save widget", function () {
    viewChannelUserDetails.getSaveWidget().click();
});
Then("Click on confirm save", function () {
    viewChannelUserDetails.getSave().click();
});
Then("Click on settings", function () {
    viewChannelUserDetails.getSettings().click();
});
Then("Click on edit", function () {
    viewChannelUserDetails.getEdit().click();
});
Then("Click on Remove", function () {
    viewChannelUserDetails.getRemove().click();
});
