/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import homePage from "../../../../../../support/pageObjects/homePage";
import O2CReturnPage from "../../../../../../support/pageObjects/O";
 
 import {
  Given,
  When,
  Then,
  And,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";
 
//-----------------OBJECT DECLARATION-----------------------
const O2CReturnPageScreen = new O2CReturnPage();
const homePageScreen = new homePage()


Then("Click on O2C For O2CReturn", function(){
  homePageScreen.getsO2C().click({ force: true });
  cy.wait(2000)
})

Then("Click on Return", function(){
      O2CReturnPageScreen.getReturn().click();
    cy.wait(2000)
})

Then("Click on Return2", function(){
  O2CReturnPageScreen.getReturn2().click();
cy.wait(2000)
})
Then("Click on Return3", function(){
  O2CReturnPageScreen.getReturn3().click({force: true});
cy.wait(2000)
})


Then("Enter Order Amount For O2CReturn", function(){
    O2CReturnPageScreen.getPosteTopUpOrderAmount().type(this.CTCW.ten);;
    O2CReturnPageScreen.geteTopUpOrderAmount().type(this.CTCW.ten);;
})

Then("Enter Remarks For O2C Return", function(){
    O2CReturnPageScreen.getRemarks().type(this.CTCW.ten);;
   })

  
Then("Enter Pin For O2C Return", function(){
    O2CReturnPageScreen.getpinField().type(this.CTCW.pin);
  cy.wait
    })

Then("Check if O2CReturnSuccessMsg Is Present", function(){
  O2CReturnPageScreen.getReturnSuccessfulMsg().should('be.visible')
      })
      


     
  

   
    
    