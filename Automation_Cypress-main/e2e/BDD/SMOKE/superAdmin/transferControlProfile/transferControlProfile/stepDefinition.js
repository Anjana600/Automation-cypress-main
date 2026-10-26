/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import homePage from "../../../../../../support/pageObjects/homePage";
import transferControlProfilePage from "../../../../../../support/pageObjects/transferControlProfilePage";
 
 import {
  Given,
  When,
  Then,
  And,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";
 
//-----------------OBJECT DECLARATION-----------------------
const transferControlProfileScreen = new transferControlProfilePage();
const homePageScreen = new homePage()

Then("Click on Profile Management", function(){
  homePageScreen.getProfileManagementId().click({ force: true });
  cy.wait(2000)
})

Then("Click on Domain and Category Names", function(){
  transferControlProfileScreen.getDomainNameDropdown().click();
  cy.wait(2000)
  transferControlProfileScreen.getselectFromDomainNameDropdown().click();
  transferControlProfileScreen.getCategoryNameDropdown().click();
  cy.wait(2000)
  transferControlProfileScreen.getselectFromCategoryNameDropdown().click();
  })

  Then("Click on Proceed button", function(){
    transferControlProfileScreen.getProceedButton().click({ force: true });
    cy.wait(2000)
  })

  Then("Enter Profile Name", function(){
    transferControlProfileScreen.getProfileName().click().type(this.tcp.name);
    cy.wait(2000)
     })

   Then("Enter Short Name", function(){
    transferControlProfileScreen.getShortName().click().type(this.tcp.name);
    cy.wait(2000)
     })

   Then("Enter Description", function(){
      transferControlProfileScreen.getDescription().click().type(this.tcp.name);
      cy.wait(2000)
       })

   Then("Entering Balance Preferences", function(){
      transferControlProfileScreen.getPostETopupMinBalance().click().type(this.tcp.ten);
      transferControlProfileScreen.getETopupMinBalance().click().type(this.tcp.lakh);
      transferControlProfileScreen.getPostETopupMaxBalance().click().type(this.tcp.hundred);
      transferControlProfileScreen.getETopupMaxBalance().click().type(this.tcp.hundred);
      transferControlProfileScreen.getPostETopupMinAmount().click().type(this.tcp.ten);
      transferControlProfileScreen.getETopupMinAmount().click().type(this.tcp.lakh);
      transferControlProfileScreen.getPostETopupMaxAmount().click().type(this.tcp.ten);
      transferControlProfileScreen.getETopupMaxAmount().click().type(this.tcp.lakh);
      transferControlProfileScreen.getPostETopupAlertingBal().click().type(this.tcp.ten);
      transferControlProfileScreen.getETopupAlertingBal().click().type(this.tcp.lakh);
      transferControlProfileScreen.getPostETopupMaxPercentage().click().type(this.tcp.ten);
      transferControlProfileScreen.getETopupAlertingMaxPercentage().click().type(this.tcp.lakh);
 
        })

        
   Then("Entering Daily Values", function(){
     transferControlProfileScreen.getChannelTransferInCount().click().type(this.tcp.hundred);
    transferControlProfileScreen.getChannelTransferOutCount().click().type(this.tcp.hundred);
    transferControlProfileScreen.getSubscriberTransferInCount().click().type(this.tcp.hundred);
    transferControlProfileScreen.getSubscriberTransferOutCount().click().type(this.tcp.hundred);
    transferControlProfileScreen.getChannelTransferInAlertingCount().click().type(this.tcp.ten);
    transferControlProfileScreen.getChannelTransferOutAlertingCount().click().type(this.tcp.ten);
    transferControlProfileScreen.getSubscriberTransferInAlertingCount().click().type(this.tcp.ten);
    transferControlProfileScreen.getSubscriberTransferOutAlertingCount().click().type(this.tcp.ten);
    transferControlProfileScreen.getChannelTransferInValue().click().type(this.tcp.hundred);
    transferControlProfileScreen.getChannelTransferOutValue().click().type(this.tcp.hundred);
    transferControlProfileScreen.getSubscriberTransferValue().click().type(this.tcp.hundred);
    transferControlProfileScreen.getSubscriberTransferOutValue().click().type(this.tcp.hundred);
    transferControlProfileScreen.getChannelTransferInAlertingValue().click().type(this.tcp.ten);
    transferControlProfileScreen.getChannelTransferOutAlertingValue().click().type(this.tcp.ten);
    transferControlProfileScreen.getSubscriberTransferAlertingValue().click().type(this.tcp.ten);
    transferControlProfileScreen.getSubscriberTransferOutAlertingValue().click().type(this.tcp.ten);
      })

  Then("Entering Weekly Values", function(){
    transferControlProfileScreen.getWeekOption().click()
        transferControlProfileScreen.getChannelTransferInCountW().click().type(this.tcp.hundred);
        transferControlProfileScreen.getChannelTransferOutCountW().click().type(this.tcp.hundred);
        transferControlProfileScreen.getSubscriberTransferInCountW().click().type(this.tcp.hundred);
        transferControlProfileScreen.getSubscriberTransferOutCountW().click().type(this.tcp.hundred);
        transferControlProfileScreen.getChannelTransferInAlertingCountW().click().type(this.tcp.ten);
        transferControlProfileScreen.getChannelTransferOutAlertingCountW().click().type(this.tcp.ten);
        transferControlProfileScreen.getSubscriberTransferInAlertingCountW().click().type(this.tcp.ten);
        transferControlProfileScreen.getSubscriberTransferOutAlertingCountW().click().type(this.tcp.ten);
        transferControlProfileScreen.getChannelTransferInValueW().click().type(this.tcp.hundred);
        transferControlProfileScreen.getChannelTransferOutValueW().click().type(this.tcp.hundred);
        transferControlProfileScreen.getSubscriberTransferValueW().click().type(this.tcp.hundred);
        transferControlProfileScreen.getSubscriberTransferOutValueW().click().type(this.tcp.hundred);
        transferControlProfileScreen.getChannelTransferInAlertingValueW().click().type(this.tcp.ten);
        transferControlProfileScreen.getChannelTransferOutAlertingValueW().click().type(this.tcp.ten);
        transferControlProfileScreen.getSubscriberTransferAlertingValueW().click().type(this.tcp.ten);
        transferControlProfileScreen.getSubscriberTransferOutAlertingValueW().click().type(this.tcp.ten);
        })

     Then("Entering Monthly Values", function(){
      transferControlProfileScreen.getMonthOption().click()
            transferControlProfileScreen.getChannelTransferInCountM().click().type(this.tcp.thousand);
            transferControlProfileScreen.getChannelTransferOutCountM().click().type(this.tcp.thousand);
            transferControlProfileScreen.getSubscriberTransferInCountM().click().type(this.tcp.thousand);
            transferControlProfileScreen.getSubscriberTransferOutCountM().click().type(this.tcp.thousand);
            transferControlProfileScreen.getChannelTransferInAlertingCountM().click().type(this.tcp.ten);
            transferControlProfileScreen.getChannelTransferOutAlertingCountM().click().type(this.tcp.ten);
            transferControlProfileScreen.getSubscriberTransferInAlertingCountM().click().type(this.tcp.ten);
            transferControlProfileScreen.getSubscriberTransferOutAlertingCountM().click().type(this.tcp.ten);
            transferControlProfileScreen.getChannelTransferInValueM().click().type(this.tcp.thousand);
            transferControlProfileScreen.getChannelTransferOutValueM().click().type(this.tcp.thousand);
            transferControlProfileScreen.getSubscriberTransferValueM().click().type(this.tcp.thousand);
            transferControlProfileScreen.getSubscriberTransferOutValueM().click().type(this.tcp.thousand);
            transferControlProfileScreen.getChannelTransferInAlertingValueM().click().type(this.tcp.ten);
            transferControlProfileScreen.getChannelTransferOutAlertingValueM().click().type(this.tcp.ten);
            transferControlProfileScreen.getSubscriberTransferAlertingValueM().click().type(this.tcp.ten);
            transferControlProfileScreen.getSubscriberTransferOutAlertingValueM().click().type(this.tcp.ten);
            })


            Then("Click on Save", function(){
              transferControlProfileScreen.getSaveButton().click();
              cy.wait(2000)
               })