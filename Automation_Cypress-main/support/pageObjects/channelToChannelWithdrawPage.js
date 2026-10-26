class channelToChannelWithdrawPage{
    getWithdrawl()
    {
        return cy.get(':nth-child(3) > .ng-star-inserted > img')
    }

    getSearchByDropdown()
    {
        return cy.get('#searchBy > .ng-select-container > .ng-value-container > .ng-input')
    }

    getSelectMobileNoFromDropdown()
    {
        return cy.get('ng-dropdown-panel').contains('Mobile Number')
    }
    getMobileNoField()
    {
        return cy.get('#searchMsisdnId')
    }
    getProceed()
    {
        return cy.get('#proceedButton > .mdc-button__label')
    }
    getPosteTopupOrderAmount()
    {
        return cy.get(':nth-child(4) > .row > .amountP > #amoutnId')
    }
    geteTopupOrderAmount()
    {
        return cy.get(':nth-child(5) > .row > .amountP > #amoutnId')
    }
    getRemarks()
    {
        return cy.get('#textBox')
    }
    getWithdrawButton()
    {
        return cy.get('#withdrawButton > .mdc-button__label')
    }
    getPinField()
    {
        return cy.get('#no-partitioned')
    }
    getwithdraw2()
    {
        return cy.get('.row.ng-star-inserted > .col-xl-2')
    }
    getwithdrawSuccessMsg()
    {
        return cy.get('#successfultitle')
    }
    
}
export default channelToChannelWithdrawPage