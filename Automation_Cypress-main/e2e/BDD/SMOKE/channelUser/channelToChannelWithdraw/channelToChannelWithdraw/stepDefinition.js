/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import homePage from "../../../../../../support/pageObjects/homePage";
import channelToChannelWithdrawPage from "../../../../../../support/pageObjects/channelToChannelWithdrawPage";
 
 import {
  Given,
  When,
  Then,
  And,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";
 
//-----------------OBJECT DECLARATION-----------------------
const channelToChannelWithdrawScreen = new channelToChannelWithdrawPage();
const homePageScreen = new homePage()


Then("Click on Channel to Channel", function(){
  homePageScreen.getsChannelToChannel().click({ force: true });
  cy.wait(2000)
})

Then("Click on Withdrawl", function(){
    channelToChannelWithdrawScreen.getWithdrawl().click();
    cy.wait(2000)
})


Then("Select searchby", function(){
  channelToChannelWithdrawScreen.getSearchByDropdown().click();
  channelToChannelWithdrawScreen.getSelectMobileNoFromDropdown().click();
})

Then("Click on Proceed For Withdrawl", function(){
  channelToChannelWithdrawScreen.getsProceed().click();
  channelToChannelWithdrawScreen.getMobileNoField().type(this.CTCW.channelUserMobileNo);
  channelToChannelWithdrawScreen.getsProceed().click();
  })

 Then("Enter Order Amount", function(){
  channelToChannelWithdrawScreen.getsPosteTopupOrderAmount().type(this.CTCW.ten);
  channelToChannelWithdrawScreen.getseTopupOrderAmount().type(this.CTCW.ten);

})
  
  Then("Enter Remarks", function(){
    channelToChannelWithdrawScreen.getsRemarks().type(this.CTCW.remarks);
    cy.wait
    
})

Then("click on withdraw", function(){
  channelToChannelWithdrawScreen.getsWithdrawButton().click();
  cy.wait
  })
Then("Enter Pin", function(){
  channelToChannelWithdrawScreen.getPinField().type(this.CTCW.pin);
  cy.wait
    })
Then("click withdraw", function(){
  channelToChannelWithdrawScreen.getwithdraw2().click();
  cy.wait
     })
Then("check for withdraw SuccessMsg", function(){
  channelToChannelWithdrawScreen.getwithdrawSuccessMsg().should('be.visible')
  cy.wait
      })    

   
    
    