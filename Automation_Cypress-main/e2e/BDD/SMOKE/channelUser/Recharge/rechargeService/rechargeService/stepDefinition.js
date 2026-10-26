/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import homePage from "../../../../../../support/pageObjects/homePage";
import rechargeServicePage from "../../../../../../../../support/pageObjects/rechargeServicePage";
 
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
const rechargeServicePage = new rechargeServicePage();

Then("Click on Recharge", function () {
    cy.wait(3000);
    homePageScreen.getRecharge().click();
    cy.wait(2000);
});

Then("Click on Recharge Service", function () {
    homePageScreen.getRechargeService().click();
});

Then("Click on Recharge Service Single", function () {
    rechargeServicePage.getRechargeServiceSingle().click();
});
Then("Click on Recharge Prepaid", function () {
    rechargeServicePage.getRechargePrepaid().click();
});
Then("Enter Recharge Mobile Number", function () {
    rechargeServicePage.getMobileNumber().type(this.userData.ChannelUser2Msisdn);
});
Then("Enter Recharge Amount", function () {
    rechargeServicePage.getAmount().type('1000');
});
Then("Click and select Sub services", function () {
    rechargeServicePage.getSubService().click();
    rechargeServicePage.getSelectSubService().click();
});
Then("Click on English", function () {
    rechargeServicePage.getselectEnglish().click();
});
Then("Click on RechargeOne Btn", function () {
    rechargeServicePage.getRechargeOneBtn().click();
});
Then("Enter on Recharge Pin", function () {
    rechargeServicePage.getRechargePin().type(this.userData.ChannelUserPin);
});
Then("Click on Confirm Recharge", function () {
    rechargeServicePage.getConfirmRecharge().click();
});

