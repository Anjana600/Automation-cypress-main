/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import homePage from "../../../../../../support/pageObjects/homePage";
import C2SReconciliation from "../../../../../../support/pageObjects/C2SReconciliationPage";
 
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
const C2SReconciliationPage = new C2SReconciliation();

Then("Click on C2S Reconciliation", function () {
    cy.wait(3000);
    homePageScreen.getC2SReconciliation().click();
    cy.wait(2000);
});
Then("Click on Data Range", function () {
    C2SReconciliationPage.getDateRange().click();
});
Then("Set Start Date and End Date", function () {
    C2SReconciliationPage.getStartDate().click();
    C2SReconciliationPage.getEndDate().click();
});
Then("Click and select on Service", function () {
    C2SReconciliationPage.getService().click();
    C2SReconciliationPage.getSelectService().click();
});
Then("Click on Proceed Btn", function () {
    C2SReconciliationPage.getProceedButton().click();
});
Then("Click on edit Btn", function () {
    C2SReconciliationPage.getEditButton().click();
});
Then("Click on success Btn", function () {
    C2SReconciliationPage.getSuccessButton().click();
});
Then("Click on fail Btn", function () {
    C2SReconciliationPage.getFailButton().click();
});

