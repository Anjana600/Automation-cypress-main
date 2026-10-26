/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import homePage from "../../../../../../support/pageObjects/homePage";
import batchc2cBulkApprovalPage from "../../../../../../../../support/pageObjects/batchc2cBulkApprovalPage";
 
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
const batchc2cBulkApprovalPage = new batchc2cBulkApprovalPage();

Then("Click on Approval level1 C2C", function () {
    homePageScreen.getApprovalLevel1C2C().click();
});
Then("Click on Bulk Operation c2c for approval", function () {
    batchc2cBulkApprovalPage.getBulkOperationC2C().click();
});
Then("Click on Approve One c2c", function () {
    batchc2cBulkApprovalPage.getApproveOnec2c().click();
});
Then("Enter Approvers Remarks", function () {
    batchc2cBulkApprovalPage.getApproversRemarks().type('test');
});
Then("Click on Approve Two c2c", function () {
    batchc2cBulkApprovalPage.getApproveTwoc2c().click;
});
Then("Click on Yes c2c", function () {
    batchc2cBulkApprovalPage.getYesc2c().click();
});
Then("Click on C2C Approval1 Done btn", function () {
    batchc2cBulkApprovalPage.getC2CApprovalDone().click();
});