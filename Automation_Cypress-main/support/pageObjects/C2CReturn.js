export default class C2CReturn{

    getReturnID()
    {
       return cy.get('.rightmarginreturn > .ng-star-inserted')
    }

    getSelectDropdownID()
    {
        return cy.get('#searchBy > .ng-select-container > .ng-arrow-wrapper')
    }

    getMSISDNinSearchID()
    {
        return cy.get("ng-dropdown-panel").contains("Mobile Number")
    }

    getEnterMSISDNField()
    {
        return cy.get('#searchMsisdnId')
    }

    getProceedButtonID()
    {
        return cy.get('#proceedButton > .mdc-button__label')
    }

    getAmountFeildID()
    {
        return cy.get(':nth-child(5) > .row > .amountP > #amoutnId')
    }

    getRemarksFeildID()
    {
        return cy.get('#textBox')
    }

    getReturnButtonID()
    {
        return cy.get('#returnButton > .mdc-button__label')
    }

    getPinFieldID()
    {
        return cy.get('#no-partitioned')
    }

    getReturnIDinPinPage()
    {
        return cy.get('#returnButton1 > span.mdc-button__label')
    }

    getReturnSucessfullID()
    {
        return cy.get("#successfultitle")
    }

    getDoneButtonID()
    {
        return cy.get('#doneButton > span.mdc-button__label')
    }
}