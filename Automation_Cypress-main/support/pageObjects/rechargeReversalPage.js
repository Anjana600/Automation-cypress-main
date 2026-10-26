class rechargeReversalPage{


    getRechargeReversal()
    {
        return cy.get('#P_RC_RV > span')
    }

    getSearchByDropdown()
    {
        return cy.get('.form-control > .ng-select-container > .ng-value-container > .ng-input')
    }
    getSelectMobileNoFromSearchByDropdown()
    {
        return cy.get('ng-dropdown-panel').contains('Mobile number')
    }
    getMobileNoField()
    {
        return cy.get('.valueblock > .form-control')
    }
    getProceed()
    {
        return cy.get('.rounded-btn > .mdc-button__label')
    }
    getReverseAmount()
    {
        return cy.get('.spanClass')

    }
    getEnterPin()
    {
        return cy.get('#no-partitioned')
    }
    getReverseAmount2()
    {
        return cy.get('#recharge > .mat-mdc-button-touch-target')
    }
    
    getc2sRechargeReversalSucessMsg()
    {
        return cy.get('.recharge-successful')
    }


}
export default rechargeReversalPage