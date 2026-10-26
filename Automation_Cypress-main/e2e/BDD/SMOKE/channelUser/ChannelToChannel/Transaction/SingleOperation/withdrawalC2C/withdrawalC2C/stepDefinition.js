/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import homePage from "../../../../../../support/pageObjects/homePage";
import withdrawalC2CPage from "../../../../../../../../support/pageObjects/withdrawalC2CPage";
 
import {
  Given,
  When,
  Then,
  And,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";
import { randomInt } from "appium-webdriveragent/build/lib/utils";
 
//-----------------OBJECT DECLARATION-----------------------
const withdrawalC2CPage = new withdrawalC2CPage();

Then("Click on Single C2C Operation", function () {
    withdrawalC2CPage.getSingleC2COperation().click();
});
Then("Click on withdrawal", function () {
    withdrawalC2CPage.getWithdrawal().click();
});
Then("Click and select Mobilenumber", function () {
    withdrawalC2CPage.getSearchBy().click();
    withdrawalC2CPage.getSelectSearchOption().click();
});
Then("Enter Mobile number", function () {
    withdrawalC2CPage.getMobileNumOrLoginID().type(this.userData.ChannelUser2Msisdn);
});
Then("Click on c2c withdrawal proceed btn", function () {
    withdrawalC2CPage.getProceedC2C().click();
});
Then("Click on C2C withdrawal etopup amount", function () {
    withdrawalC2CPage.getEtopupAmount().type('11');
});
Then("Click on C2C withdraw remarks", function () {
    withdrawalC2CPage.getRemarks().type('test');
});
Then("Click on C2C withdraw btn", function () {
    withdrawalC2CPage.getWithdrawBtn().click();
});
Then("Enter C2C withdrawal Pin", function () {
    withdrawalC2CPage.getPinC2CWithdrawal().type(this.userData.ChannelUserPin);
});
Then("Click on C2C withdrawal Confirm", function () {
    withdrawalC2CPage.getConfirmWithdraw().click();
});
Then("Click on C2C withdrawal Done btn", function () {
    withdrawalC2CPage.getC2CWithdrawalDoneBtn().click();
});