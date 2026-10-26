/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import batchFOCPage from "../../../../../../../support/pageObjects/batchFOCPage";
 
import {
  Given,
  When,
  Then,
  And,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";
 
//-----------------OBJECT DECLARATION-----------------------
const batchFOCPage = new batchFOCPage();

Then("Click and Select Operation For Commission Payout", function () {
    batchFOCPage.getOperationDropdown().click();
    batchFOCPage.getCommissionPayout().click();
});