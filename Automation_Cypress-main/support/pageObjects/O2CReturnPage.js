class O2CReturnPage{
   
    getReturn()
    {
        return cy.get(':nth-child(2) > a.ng-tns-c2281572612-15 > span.ng-tns-c2281572612-15')
    }

    geteTopUpOrderAmount()
    {
        return cy.get(':nth-child(2) > .row > .amountP > #amountId')
    }
    getPosteTopUpOrderAmount()
    {
        return cy.get(':nth-child(3) > .row > .amountP > #amountId')
    }
    getRemarks()
    {
        return cy.get('#textBox')
    }
    getReturn2()
    {
        return cy.get('#purchaseO2c > .mdc-button__label')
    }
    getpinField()
    {
        return cy.get('#no-partitioned')
    }
    getReturn3()
    {
        return cy.get('#returnId > .mat-mdc-button-touch-target')
    }
    getReturnSuccessfulMsg()
    {
        return cy.get('#successfultitle')
    }
}
export default O2CReturnPage