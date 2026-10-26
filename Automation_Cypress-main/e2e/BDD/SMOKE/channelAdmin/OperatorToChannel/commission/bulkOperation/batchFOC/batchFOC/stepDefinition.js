/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import homePage from "../../../../../../support/pageObjects/homePage";
import batchFOCPage from "../../../../../../../support/pageObjects/batchFOCPage";
 
import {
  Given,
  When,
  Then,
  And,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";
 
//-----------------OBJECT DECLARATION-----------------------
const homePageScreen = new homePage();
const batchFOCPage = new batchFOCPage();


Then("Click on Operator To Channel", function () {
    cy.wait(3000);
    homePageScreen.getOperatorToChannel().click();
    cy.wait(2000);
});

Then("Click on Commission", function () {
    batchFOCPage.getCommissionID().click();
});
Then("Click on Bulk Operation", function () {
    batchFOCPage.getBulkOperationID().click();
});

Then("Click and Select Geography", function () {
    batchFOCPage.getGeographyDopdown().click();
    batchFOCPage.getZoneID().click();
});
Then("Click and Select Domain", function () {
    batchFOCPage.getDomaindropDown().click();
    batchFOCPage.getDomainValue().click();
});
Then("Click and Select User Category", function () {
    batchFOCPage.getUserCategoryDropdown().click();
    batchFOCPage.getCategoryValue().click();
});
Then("Click and Select Product", function () {
    batchFOCPage.getProductDropdown().click();
    batchFOCPage.getEtopupValue().click();
});
Then("Click and Select Operation", function () {
    batchFOCPage.getOperationDropdown().click();
    batchFOCPage.getFreeOfCost().click();
});
Then("Click on Download Template", function () {
    batchFOCPage.getDownloadTemplateID().click();
});
Then("Enter Batch Name", function () {
    batchFOCPage.getBatchName().type("groupNew");
});
Then("Click on ChooseFile", function () {
    batchFOCPage.getChooseFile().click();
});
Then("Click on Submit Button", function () {
    batchFOCPage.getSubmit().click();
});
Then("Click on Confirm Button", function () {
    batchFOCPage.getConfirmID().click();
});
Then("Click on Done Button", function () {
    batchFOCPage.getDoneID().click();
});
Then("Click on CommissionID", function () {
    batchFOCPage.getCommissionLevel1().click();
});
Then("Click on CommissionIDlevel2", function () {
    batchFOCPage.getCommissionLevel2().click();
});
Then("Click on CommissionIDlevel3", function () {
    batchFOCPage.getCommissionLevel3().click();
});
Then("Click on BulkOperationID", function () {
    batchFOCPage.getBulkOperation().click();
});
When('Retrieve text from the element', () => {
    cy.getBatchNameForSuccessPage().invoke('text').as('batchName');
});
Then('enter the batch name into the input field', () => {
    cy.get('@batchName').then((batchName) => {
        cy.getEnterBatchName().type(batchName);
    });
});
Then("Click on ApprovalOne", function () {
    batchFOCPage.getApprovalOne().click();
    cy.wait(3000);
});
Then("Click on getApprovalTwoAndThree", function () {
    batchFOCPage.getApprovalTwoAndThree().click();
    cy.wait(3000);
    batchFOCPage.getApprovalTwoAndThree().click();
    cy.wait(3000);
});
Then("Click on YesBtn", function () {
    batchFOCPage.getYesBtn().click();
    cy.wait(2000);
});
Then("Click on DoneBtn", function () {
    batchFOCPage.getDoneBtn().click();
    cy.wait(2000);
});
Then("Click on Approval level2", function () {
    cy.wait(3000);
    homePageScreen.getApprovalLevel2().click();
    cy.wait(2000);
});
Then("Click on Approval level3", function () {
    cy.wait(3000);
    homePageScreen.getApprovalLevel3().click();
    cy.wait(2000);
});