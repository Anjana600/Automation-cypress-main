/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import homePage from "../../../../../../support/pageObjects/homePage";
import initiateStockDeduction from "../../../../../../support/pageObjects/initiateStockDeductionPage";
 
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
const initiateStockDeductionPage = new initiateStockDeduction();

Then("Click on Network Stock", function () {
    cy.wait(3000);
    homePageScreen.getNetworkStock().click();
    cy.wait(2000);
});

Then("Click on Deduction", function () {
    initiateStockDeductionPage.getDeduction().click();
});

Then("Click on Wallet type DropDown", function () {
    initiateStockDeductionPage.getWalletType().click();
});

Then("Select on Wallet type", function () {
    initiateStockDeductionPage.getSelectWalletType().click();
});
Then("Click on Proceed", function () {
    initiateStockDeductionPage.getProceed().click();
});
Then("Enter the Requested Quantities", function () {
    initiateStockDeductionPage.getPostRequestedQuantity().click().type(this.RequestedQuantity);
    initiateStockDeductionPage.getETopUpRequestedQuantity().click().type(this.OtherRequestedQuantity);
});
Then("Click on Proceed Button", function () {
    initiateStockDeductionPage.getProceedButton().click();
});
Then("Click on Done Button", function () {
    initiateStockDeductionPage.getDoneBtn().click();
});