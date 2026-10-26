/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import homePage from "../../../../../../support/pageObjects/homePage";
import rechargeReversalPage from "../../../../../../support/pageObjects/rechargeReversalPage";
 
 import {
  Given,
  When,
  Then,
  And,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";
 
//-----------------OBJECT DECLARATION-----------------------
const rechargeReversalScreen = new rechargeReversalPage();
const homePageScreen = new homePage()


Then("Click on Recharge", function(){
  homePageScreen.getrecharge().click({ force: true });
  cy.wait(2000)
})

Then("Click on Reversal for Recharge", function(){
    rechargeReversalScreen.getRechargeReversal().click();
    cy.wait(2000)
})

Then("Select MobileNo From Searchby Dropdown", function(){
    rechargeReversalScreen.getSearchByDropdown().click();
    rechargeReversalScreen.getSelectMobileNoFromSearchByDropdown().click();
    cy.wait(2000)
})
Then("Enter MobileNo for Recharge Reversal", function(){
    rechargeReversalScreen.getMobileNoField().type(this.rechargeReversal.mobileNo);
cy.wait(2000)
})

Then("Click on Proceed for Recharge Reversal", function(){
    rechargeReversalScreen.getProceed().click();
})

Then("Click on reverse Amount for Recharge Reversal", function(){
    rechargeReversalScreen.getReverseAmount().click();
   })

  
Then("Enter Pin For Recharge Reversal", function(){
    rechargeReversalScreen.getEnterPin().type(this.CTCW.pin);
 
    })

Then("Click on Reverse Amount2 For Recharge Reversal", function(){
    rechargeReversalScreen.getReverseAmount2().click({force: true});
    cy.wait(40000)
      })

Then("Check if rechargeReversal Success Msg Is Present", function(){
  rechargeReversalScreen.getc2sRechargeReversalSucessMsg().should('be.visible')
     })


     
  

   
    
    