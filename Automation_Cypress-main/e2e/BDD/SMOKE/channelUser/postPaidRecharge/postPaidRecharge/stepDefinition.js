/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import homePage from "../../../../../../support/pageObjects/homePage";
import postPaidRechargePage from "../../../../../../support/pageObjects/postPaidRechargePage";
 
 import {
  Given,
  When,
  Then,
  And,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";
 
//-----------------OBJECT DECLARATION-----------------------
const postPaidRechargeScreen = new postPaidRechargePage();
const homePageScreen = new homePage()


Then("Click on Recharge For PostPaid Recharge", function(){
  homePageScreen.getrecharge().click({ force: true });
  cy.wait(2000)
})

Then("Click on Post Paid Recharge", function(){
    postPaidRechargeScreen.getPostpaidRecharge().click();
    cy.wait(2000)
})

Then("Enter Mobile No for Recharge", function(){
    postPaidRechargeScreen.getMobileNoField().type(this.postPaidRecharge.MobileNo);
cy.wait(2000)
})
Then("Enter Amount For Recharge", function(){
    postPaidRechargeScreen.getAmountField().type(this.postPaidRecharge.amount);
cy.wait(2000)
})



Then("Click On PayBill For Postpaid Recharge", function(){
    postPaidRechargeScreen.getPayBill().click();
   })

  
Then("Enter Pin for Postpaid Recharge", function(){
    postPaidRechargeScreen.getEnterPinField().type(this.CTCW.pin);
  cy.wait
    })

Then("Click on PayBill2 for postPaid Recharge", function(){
    postPaidRechargeScreen.getPayBill2().click({force: true} );
      })
      

Then("Check For Success Message for postPaid Recharge", function(){
    postPaidRechargeScreen.getSuccessMsg().should('be.visible');
          })
          
     
  

   
    
    