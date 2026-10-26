export default class C2CPurchase{

    getPurchaseID()
    {
        return cy.get(':nth-child(2) > .rightmargin > a')
    }

    getSearchbyDropdown()
    {
        return cy.get('#searchBy > .ng-select-container > .ng-arrow-wrapper')
    }

    getMSISDNValue()
    {
        return cy.get('ng-dropdown-panel').contains("Mobile Number")
    }

    EnterMSISDN()
    {
        return cy.get('#searchMsisdnId')
    }

    getProceedButtonID()
    {
        return cy.get('#proceedButton > .mdc-button__label')
    }

    postEtopupAmount()
    {
        return cy.get(':nth-child(2) > :nth-child(6) > #amoutnId')
    }

    getReferenceNumberID()
    {
        return cy.get('#referenceNumberId')
    }

    getRemarksforPurchaseID()
    {
        return cy.get('#textBox')
    }

    getPaymentModeDropdown()
    {
        return cy.get('#paymentModeSelect > .ng-select-container > .ng-arrow-wrapper')
    }

    getCashMode()
    {
        return cy.get('ng-dropdown-panel').contains("Cash")
    }

    getPaymentInstrumentNumber()
    {
        return cy.get('#payInstNmbrId2')
    }

    getPurchaseButton()
    {
        return cy.get('#purchaseButton > .mdc-button__label')
    }

    getPaymentDateCalender()
    {
        return cy.get('.p-button-icon')
    }

    getPaymentDateID()
    {
        return cy.get('td').contains('29')
    }

    getPinFeild()
    {
        return cy.get('#divOuter')
    }
    
    getPurchaseButtoninPinPage()
    {
        return cy.get('#purchaseButton1 > span.mdc-button__label')
    }

    getRequestInitiatedText()
    {
        return cy.get('#modal-basic-title > b')
    }

    getDoneButtonInsucessfulpage()
    {
        return cy.get('#doneButton > span.mdc-button__label')
    }

}