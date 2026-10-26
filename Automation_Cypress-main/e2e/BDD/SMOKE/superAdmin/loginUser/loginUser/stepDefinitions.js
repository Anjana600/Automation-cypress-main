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
  cy.login(this.userData.networkadminloginID, this.userData.networkadminpasswd);
  cy.wait(2000)
});
Given("Login with Channel User Credentials", function() {
  cy.login(this.userData.channelUserLoginID, this.userData.channelUserpasswd);
  cy.wait(2000)
});
Given("Login with Channel Admin2 Credentials", function() {
  cy.login(this.userData.channeladminloginID2, this.userData.channeladminpasswd2);
  cy.wait(2000)
});
Given("Login with channel Admin Credentials", function() {
  cy.login(this.userData.channeladminloginID, this.userData.channeladminpasswd);
  cy.wait(2000)
});