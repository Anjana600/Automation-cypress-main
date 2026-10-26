/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import homePage from "../../../../../../support/pageObjects/homePage";
import C2STransferRule from "../../../../../../support/pageObjects/C2STransferRulePage";
 
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
const C2STransferRulePage = new C2STransferRule();

Then("Click on Transfer Rules", function () {
    cy.wait(3000);
    homePageScreen.getTransferRules().click();
    cy.wait(2000);
});

Then("Click on add transfer rule", function () {
    C2STransferRulePage.getAddTransferRule().click();
});

Then("Click and select Channel Domain", function () {
    C2STransferRulePage.getChannelDomain().click();
    C2STransferRulePage.getSelectChannelDomain().click();
});

Then("Click and select Channel Category", function () {
    C2STransferRulePage.getChannelCategory().click();
    C2STransferRulePage.getSelectChannelCategory().click();
});

Then("Click and select Channel Grade", function () {
    C2STransferRulePage.getChannelGrade().click();
    C2STransferRulePage.getSelectChannelGrade().click();
});
Then("Click and select Receiver Type", function () {
    C2STransferRulePage.getReceiverType().click();
    C2STransferRulePage.getSelectReceiverType().click();
});
Then("Click and select Receiver Service Class", function () {
    C2STransferRulePage.getReceiverServiceClass().click();
    C2STransferRulePage.getSelectReceiverServiceClass().click();
});
Then("Click and select Service Type", function () {
    C2STransferRulePage.getServiceType().click();
    C2STransferRulePage.getSelectServiceType().click();
});
Then("Click and select Sub-Service", function () {
    C2STransferRulePage.getSubService().click();
    C2STransferRulePage.getSelectSubService().click();
});
Then("Click and select Card Group Set", function () {
    C2STransferRulePage.getCardGroupSet().click();
    C2STransferRulePage.getSelectCardGroupSet().click();
});
Then("Click on save", function () {
    C2STransferRulePage.getSaveButton().click();
});
Then("Click on ConfirmBtn", function () {
    C2STransferRulePage.getConfirmButton().click();
});
Then("Click on DoneBtn", function () {
    C2STransferRulePage.getDoneButton().click();
});
Then("Click and select GatewayCode", function () {
    C2STransferRulePage.getGatewayCode().click();
    C2STransferRulePage.getSelectGatewayCode().click();
});
Then("Click and select Status", function () {
    C2STransferRulePage.getStatus().click();
    C2STransferRulePage.getSelectStatus().click();
});
Then("Click on ProceedBtn", function () {
    C2STransferRulePage.getProceedButton().click();
});
Then("Click and enter element into search", function () {
    C2STransferRulePage.getSearch().type("AUT3gbMFn");
});
Then("Click on DeleteBtn", function () {
    C2STransferRulePage.getDelete().click();
});
Then("Click on YesButton", function () {
    C2STransferRulePage.getYesButton().click();
});
//getDoneButton

