class withdrawalC2CPage{
    getSingleC2COperation()
    {
        return cy.get('#singleToggle-button > span')
    }
    getWithdrawal()
    {
        return cy.get('body > app-root > div > app-layout > section > app-channeltochannel > div > div.mask.ng-tns-c1934162132-29 > div > header-channeltochannel > ul > li.rightmargin > a') 
    }
    getSearchBy()
    {
        return cy.get('#searchBy')
    }
    getSelectSearchOption()
    {
        return cy.get('ng-dropdown-panel').contains('Mobile Number')
    }
    getMobileNumOrLoginID()
    {
        return cy.get('#searchMsisdnId')
    }
    getProceedC2C()
    {
        return cy.get('#proceedButton > span.mat-mdc-button-touch-target')
    }
    getEtopupAmount()
    {
        return cy.get('#amoutnId')
    }
    getRemarks()
    {
        return cy.get('#textBox')
    }
    getWithdrawBtn()
    {
        return cy.get('#withdrawButton > span.mat-mdc-button-touch-target')
    }
    getPinC2CWithdrawal()
    {
        return cy.get('#no-partitioned')
    }
    getConfirmWithdraw()
    {
        return cy.get('#withdrawButton1 > span.mat-mdc-button-touch-target')
    }
    getC2CWithdrawalDoneBtn()
    {
        return cy.get('#doneButton > span.mat-mdc-button-touch-target')
    }

}
export default withdrawalC2CPage