/// <reference types="Cypress" />
 
//-----------------IMPORTS------------------------
import staffUserHierarchyPage from "../../../../../../support/pageObjects/staffUserHierarchyPage";
 
import {
  Given,
  When,
  Then,
  And,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";
 
//-----------------OBJECT DECLARATION-----------------------
const staffUserHierarchyPage = new staffUserHierarchyPage();

Then("Click On Advanced", function () {
    staffUserHierarchyPage.getAdvancedID().click();
});


