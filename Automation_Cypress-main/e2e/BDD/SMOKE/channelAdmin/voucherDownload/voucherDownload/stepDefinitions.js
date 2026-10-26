/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import homePage from "../../../../../../support/pageObjects/homePage";
import voucherDownload from "../../../../../../support/pageObjects/voucherDownload";
import {
    Given,
    When,
    Then,
    And,
    Before,
  } from "@badeball/cypress-cucumber-preprocessor";

//-----------------OBJECT DECLARATION-----------------------
const homeScreen= new homePage();
const vd= new voucherDownload();

When("Click on voucher Download",function(){
    homeScreen.getVoucherDownloadID().click();
    cy.wait(2000)
})