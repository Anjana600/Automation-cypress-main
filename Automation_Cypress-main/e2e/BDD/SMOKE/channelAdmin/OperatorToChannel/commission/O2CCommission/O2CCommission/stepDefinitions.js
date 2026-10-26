/// <reference types="Cypress" />
/// <reference types="cypress-downloadfile"/>
//-----------------IMPORTS------------------------
import O2CCommission from "../../../../../../../../support/pageObjects/O2CCommission";
// import "cypress-fs";
// import { rename } from 'node:fs';
import {
    Given,
    When,
    Then,
    And,
    Before,
  } from "@badeball/cypress-cucumber-preprocessor";

//-----------------OBJECT DECLARATION-----------------------
const Commission= new O2CCommission();
// const fs = require('fs');
// const fs = require('fs');

When("Select Commisson in Operator to Channel",function(){
    Commission.getCommissionID().click()
})

Then("Click on Bulk Operation",function(){
    Commission.getBulkOperationID().click()
})

Then("Select Geography",function(){
    Commission.getGeographyDopdown().click()
    Commission.getZoneID().click({force: true})
})

Then("Select Domain",function(){
    Commission.getDomaindropDown().click()
    Commission.getDomainValue().click()
})

Then("Select User Category",function(){
    Commission.getUserCategoryDropdown().click()
    Commission.getCategoryValue().click()
})

Then("Select Product",function(){
    Commission.getProductDropdown().click()
    Commission.getEtopupValue().click()
})

Then("Select Operation",function(){
    Commission.getOperationDropdown().click()
    Commission.getCommissionPayout().click()
})

Then("Download Template for O2C Commission",function(){
    Commission.getDownloadTemplateID().click()
    cy.wait(10000)
})

Then('Rename file for O2C Commission', () => {
    // const folderPath = "cypress/downloads";
    // let filesArr = fs.readdirSync(folderPath);
//cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg');
})