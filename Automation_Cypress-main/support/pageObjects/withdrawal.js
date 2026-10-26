export default class withdrawal{
    getWithdrawalID()
    {
        return cy.get(':nth-child(2) > a.ng-tns-c2281572612-9 > span.ng-tns-c2281572612-9')
    }

    getoperatorWalletDropdown()
    {
        return cy.get('#walletType > .ng-select-container > .ng-arrow-wrapper')
    }

    getsaleOperatorwallet()
    {
        return cy.get('ng-dropdown-panel').contains("Sale")
    }

    getsearchByDropdown()
    {
        return cy.get('#searchCriteriaSelect > .ng-select-container > .ng-arrow-wrapper')
    }

    getsearchByMobileNumberID()
    {
        return cy.get('ng-dropdown-panel').contains("Mobile Number")
    }

    getEnterMSISDNID()
    {
        return cy.get('#searchInput')
    }

    getProceedID()
    {
        return cy.get('#proceedButton > .mdc-button__label')
    }

    getEtopupAmountFeild()
    {
        return cy.get(':nth-child(4) > .row > .amountP > .form-control')
    }

    getRemarksFeild()
    {
        return cy.get('#textBox')
    }

    getWithdrawID()
    {
        return cy.get('#purchaseO2c > .mdc-button__label')
    }

    getWithdrawinConfirmationPage()
    {
        return cy.get('#recharge > span.mdc-button__label')
    }

    getwithdrawsuccessfulID()
    {
        return cy.get("#successfultitle") //Withdrawal Successful
    }

    getDoneButtonID()
    {
        return cy.get('#doneButton > span.mdc-button__label')
    }




}