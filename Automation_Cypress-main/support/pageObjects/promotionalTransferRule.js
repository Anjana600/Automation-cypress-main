export default class promotionalTransferRule{

    getTransferRulePromotionalID()
    {
        return cy.get('#P_NW_TRF_RULES_PROMO')
    }

    getAddTransferRuleID()
    {
        return cy.get('.col-xl-6 > .btn > .mdc-button__label')
    }

    getPromotionalLevelDropdownID()
    {
        return cy.get(':nth-child(1) > .col-12 > .form-control > .ng-select-container > .ng-arrow-wrapper')
    }

    getGeographyDropdownValueID()
    {
        return cy.get("ng-dropdown-panel").contains("Grade")
    }

    getDomainDropdownID()
    {
        return cy.get('#ng-select-box-default > form > div > div:nth-child(1) > ng-select > div > div > div.ng-input')
    }

    getCorporateDomainID()
    {
        return cy.get("ng-dropdown-panel").contains("Corporate")
    }

    getCategoryDropdownID()
    {
        return cy.get('.ng-invalid.ng-touched > .row > :nth-child(2) > .form-control > .ng-select-container > .ng-arrow-wrapper')
    }

    getCorporateAgentCategoryID()
    {
        return cy.get("ng-dropdown-panel").contains("Corporate Executive")
    }

    getTypeDropdownID()
    {
        return cy.get(':nth-child(2) > :nth-child(1) > .form-control > .ng-select-container > .ng-arrow-wrapper')
    }

    getPrepaidSubscriberID()
    {
        return cy.get("ng-dropdown-panel").contains("Prepaid Subscriber")
    }

    getSelectProviderGroupID()
    {
        return cy.get(':nth-child(5) > :nth-child(1) > .form-control > .ng-select-container > .ng-arrow-wrapper')
    }

    getnewProviderID()
    {
        return cy.get("ng-dropdown-panel").contains("new")
    }

    getStatusDropdownID()
    {
        return cy.get(':nth-child(5) > :nth-child(2) > .form-control > .ng-select-container > .ng-arrow-wrapper')
    }

    getActiveStatusID()
    {
        return cy.get("ng-dropdown-panel").contains("Active")
    }

    getServiceTypeDropdownID()
    {
        return cy.get(':nth-child(5) > :nth-child(3) > .form-control > .ng-select-container > .ng-arrow-wrapper')
    }

    getCustomerRechargeID()
    {
        return cy.get("ng-dropdown-panel").contains("Customer Recharge")
    }

    getSubServiceDropdownID()
    {
        return cy.get(':nth-child(4) > .form-control > .ng-select-container > .ng-arrow-wrapper')
    }

    getCVGSubserviceID()
    {
        return cy.get("ng-dropdown-panel").contains("CVG")
    }

    getCardGroupSetDropdownID()
    {
        return cy.get(':nth-child(5) > .form-control > .ng-select-container > .ng-arrow-wrapper')
    }

    getCardGroupSetValueID()
    {
        return cy.get("ng-dropdown-panel").contains("AUTagMKIf")
    }

    getFromCalendarIconID()
    {
        return cy.get('#promotional-datefield > div > primeng-datepicker > span > button').eq(0)
    }

    getSelectFromDateID()
    {
        return cy.get('td').contains('15')
    }

    getToCalendarIconID()
    {
        return cy.get('#promotional-datefield > div > primeng-datepicker > span > button').eq(1)
    }

    getSelectToDateID()
    {
        return cy.get('td').contains('17')
    }

    getSaveButtonID()
    {
        return cy.get('.save-btn > .mdc-button__label')
    }

    getConfirmButtonID()
    {
        return cy.get('#confirmButton > span.mat-mdc-button-touch-target')
    }

    getTransferRuleSucessPopup()
    {
        return cy.get('#modal-basic-title')
    }

    getDoneButtonID()
    {
        return cy.get('#anotherRecharge > span.mat-mdc-button-touch-target')
    }

    getSearchbyGradeID()
    {
        return cy.get('[value="Grade"]')
    }

    getDomainDropdowninFilter()
    {
        return cy.get('#domainCode > .ng-select-container > .ng-arrow-wrapper')
    }

    getCategoryDropdowninFilter()
    {
        return cy.get(':nth-child(2) > .form-control > .ng-select-container > .ng-arrow-wrapper')
    }

    getProceedButtonID()
    {
        return cy.get('.rounded-btn > .mdc-button__label')
    }

    getEditID()
    {
        return cy.get('#editLink > label').eq(0)
    }

    getTimestampID()
    {
        return cy.get('#ng-select-box-default > div:nth-child(6) > div:nth-child(3) > input')
    }

    getsaveButtonID()
    {
        return cy.get('.rounded-btn-add > .mat-mdc-button-touch-target')
    }

    getyesButtonID()
    {
        return cy.get('#rejectConfirmYes > span.mat-ripple.mat-mdc-button-ripple')
       
    }

    getyesButtoninMofidyPageID()
    {
        return cy.get('#rejectConfirmYes > span.mat-mdc-button-touch-target')
    }

    getDoneButtonID()
    {
        return cy.get('#anotherRecharge > span.mat-ripple.mat-mdc-button-ripple')
    }

    getDoneButtoninModifyPageID()
    {
        return cy.get('#anotherRecharge > span.mdc-button__label')
    }

    getDeleteButtonID()
    {
        return cy.get('#delete')
    }







    






}