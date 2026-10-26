/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import loginPage from "../../../../../../support/pageObjects/loginPage";
 
 
 
import {
  Given,
  When,
  Then,
  And,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";
 
//-----------------OBJECT DECLARATION-----------------------
const loginPageScreen = new loginPage();
 
 
 
Given("Launch the url", function () {
  cy.launchURL(Cypress.env('pvgUrl'))
});
 
Given("Login with super Admin Credentials", function() {
  cy.login(this.userData.superadminloginID, this.userData.superadminpasswd);
  cy.wait(2000)
});

Given("Login with network Admin Credentials", function() {
  cy.login(this.userData.networkloginID, this.userData.networkpasswd);
  cy.wait(2000)
});
Given("Login with channel Admin Credentials", function() {
  cy.login(this.userData.channeladminloginID, this.userData.channeladminpasswd);
  cy.wait(2000)
});
Given("Login with channel User Credentials", function() {
  cy.login(this.userData.channeluserloginID, this.userData.channelsuerpasswd);
  cy.wait(2000)
});
Given("Login with Staff User Credentials", function() {
  cy.login(this.userData.staffuserloginID, this.userData.staffsuerpasswd);
  cy.wait(2000)
});
