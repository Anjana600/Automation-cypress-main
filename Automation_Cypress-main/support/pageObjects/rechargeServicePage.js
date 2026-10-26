class rechargeServicePage{
    getRechargeServiceSingle()
    {
        return cy.get('#single1-button > span')
    }
    getRechargePrepaid()
    {
        return cy.get('#prepaid')
    }
    getMobileNumber()
    {
        return cy.get('#msisdnInput')
    }
    getAmount()
    {
        return cy.get('#amountInput')
    }
    getSubService()
    {
        return cy.get('#subServiceSelect')
    }
    getSelectSubService()
    {
        return cy.get('ng-dropdown-panel').contains('CVG')
    }
    getselectEnglish()
    {
        return cy.get('#mat-radio-14-input')
    }
    getRechargeOneBtn()
    {
        return cy.get('#recharge > span.mat-mdc-button-touch-target')
    }
    getRechargePin()
    {
        return cy.get('#no-partitioned')
    }
    getConfirmRecharge()
    {
        return cy.get('#rechargebutton2 > span.mat-mdc-button-touch-target')
    }
}
export default rechargeServicePage