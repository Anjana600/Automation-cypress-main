/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import homePage from "../../../../../../support/pageObjects/homePage";
import batchc2cBulkOperationPage from "../../../../../../../../support/pageObjects/batchc2cBulkOperationPage";
 
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
const batchc2cBulkOperationPage = new batchc2cBulkOperationPage();

Then("Click on Channel to channel", function () {
    cy.wait(3000);
    homePageScreen.getChannelToChannel().click();
    cy.wait(2000);
});

Then("Click on Transaction C2C", function () {
    homePageScreen.getTransactionC2C().click();
});

Then("Click on Bulk C2C Operation", function () {
    batchc2cBulkOperationPage.getBulkC2COperation().click();
});
Then("Click and select C2C Category", function () {
    batchc2cBulkOperationPage.getC2CCategory().click();
    batchc2cBulkOperationPage.getSelectC2CCategory().click();
});
Then("Click on download templeteC2C", function () {
    batchc2cBulkOperationPage.getDownloadTemplateC2C().click();
    cy.wait(3000);
});
Then("Enter c2c BatchName", function () {
    batchc2cBulkOperationPage.getBatchNameID().type('TeamAll');
});
Then("Click on choose templeteC2C", function () {
    batchc2cBulkOperationPage.getChooseTemplate().click();
});
Then("Click on C2C Sumbit Button", function () {
    batchc2cBulkOperationPage.getC2CSubmitID().click();
});
Then("Enter C2C Pin", function () {
    batchc2cBulkOperationPage.getC2CPin().type(this.userData.ChannelUserPin);
});
Then("Click on C2C Confirm", function () {
    batchc2cBulkOperationPage.getC2CConfirm().click();
});
When('Retrieve text from the element', () => {
    cy.getBatchIDForSuccessPage().invoke('text').as('batchID');
});
Then('enter the batch ID into the input field', () => {
    cy.get('@batchID').then((batchID) => {
        cy.getSearchByBatchID().type(batchID);
    });
});
Then("Click on C2C Done btn", function () {
    batchc2cBulkOperationPage.getC2CDone().click();
});
