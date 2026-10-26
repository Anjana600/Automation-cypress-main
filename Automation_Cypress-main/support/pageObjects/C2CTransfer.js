export default class C2CTransfer{

    getSearchDropdownID()
    {
        return cy.get('#searchBy > .ng-select-container > .ng-arrow-wrapper')
    }

    getMobileNumberinSearchID()
    {
        return cy.get("ng-dropdown-panel").contains("Mobile Number")
    }

    getEnterMSISDNID()
    {
        return cy.get('#searchMsisdnId')
    }

    getProceedID()
    {
        return cy.get('#proceedButton > .mdc-button__label')
    }

    getEnterOrderAmountID()
    {
        return cy.get(':nth-child(3) > :nth-child(6) > #amountId')
    }

    getReferenceNumberID()
    {
        return cy.get('#referenceNoId')
    }

    getRemarksID()
    {
        return cy.get('#texArea')
    }

    getPaymentModeDropdown()
    {
        return cy.get('#paymentModeId > .ng-select-container > .ng-arrow-wrapper')
    }

    getCashPaymentID()
    {
        return cy.get("ng-dropdown-panel").contains("Cash")
    }

    getPaymentInstrumentNumber()
    {
        return cy.get('#payInstNmbrId1')
    }

    getPaymentDateCalender()
    {
        return cy.get('.p-button-icon')
    }

    getPaymentDateID()
    {
        return cy.get('td').contains('15')
    }
    
    getTransferButtonID()
    {
        return cy.get('#transferButton > .mdc-button__label')
    }

    getPinfieldID()
    {
        return cy.get('#no-partitioned')
    }

    getTransferinPinpage()
    {
        return cy.get('#transferButton1 > span.mdc-button__label')
    }

    getDoneButton()
    {
        return cy.get('#doneButton1 > span.mat-mdc-button-persistent-ripple.mdc-button__ripple')
    }

    getTransferRequestInitiatedPopup()
    {
        return cy.get('#modal-basic-title > b')
    }
}