/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import homePage from "../../../../../../../support/pageObjects/homePage";
import messageGatewayPage from "../../../../../../../support/pageObjects/messageGatewayPage";
import "../../../../../../../support/Utils/generic"
 
 

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
const messageGatewayPage = new messageGatewayPage();
 
 
 
Then("Click on message Gateway", function () {
    cy.wait(3000);
    homePageScreen.getMessageGatewayId().click();
    cy.wait(3000);
});
 
Then("Click On Add Button", function() {
    cy.wait(3000);
    messageGatewayPage.getAddButton().click();
    cy.wait(7000);
});

// Then("Enter Gateway Code", function() {
//     const Num = 12345;
//     messageGatewayPage.getGatewayCode().type(Num.toString());
//     cy.wait(2000);
//     // cy.generateRandomNum().then((val)=>{
//     //     messageGatewayPage.getGatewayCode().click();
//     // })
//     //cy.generateRandomNum();
// });
Then("Enter Gateway Code", function() {
    cy.get(messageGatewayPage.getGatewayCode()).type(this.messageGateway.FiveDigitNumber);
    cy.wait(2000);
});

Then("Enter Gateway Name", function() {
    messageGatewayPage.getGatewayName().type(this.messageGateway.Name);
    cy.wait(2000);
});
Then("Select all Required Types", function() {
    messageGatewayPage.getGatewayType().click;
    messageGatewayPage.getSelectGatewayType().click;
    cy.wait(2000);
    messageGatewayPage.getProtocol().click;
    messageGatewayPage.getSelectProtocolType().click;
});
Then("Enter Host and click submit", function() {
    messageGatewayPage.getHost().type(this.messageGateway.Host);
    messageGatewayPage.getSubmit().click;
    cy.wait(2000);
});
Then("click Confirm", function() {
    messageGatewayPage.getConfirm().click;
    cy.wait(2000);
});