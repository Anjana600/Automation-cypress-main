/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import homePage from "../../../../../../support/pageObjects/homePage";
import Approval1StockDeduction from "../../../../../../../support/pageObjects/Approval-1StockDeductionPage";
 
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
const Approval1StockDeductionPage = new Approval1StockDeduction();


Then("Click on Approval level1", function () {
    cy.wait(3000);
    homePageScreen.getApprovalLevel1().click();
    cy.wait(2000);
});

Then("Click on Network Stock in Approval", function () {
    Approval1StockDeductionPage.getNetworkStock().click();
});
Then("Click on DeductionBtn", function () {
    Approval1StockDeductionPage.getDeduction().click();
});

Then("Click on Approve", function () {
    Approval1StockDeductionPage.getApprove().click();
});

Then("Click on Proceed", function () {
    Approval1StockDeductionPage.getProceed().click();
});
Then("Click on Approve btn", function () {
    Approval1StockDeductionPage.getApproveBtn().click();
});
Then("Click on Done Button", function () {
    Approval1StockDeductionPage.getDone().click();
});