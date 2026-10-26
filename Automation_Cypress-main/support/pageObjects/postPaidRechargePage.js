class postPaidRechargePage{
    getPostpaidRecharge()
    {
        return cy.get('.iconList > :nth-child(2) > li > a')
    }

    getMobileNoField()
    {
        return cy.get('#msisdn')
    }

    getAmountField()
    {
        return cy.get('#amoutnInput')
    }
 
       getPayBill()
    {
        return cy.get('#recharge > .mdc-button__label')
    }
    getEnterPinField()
    {
        return cy.get('#no-partitioned')
    }
    getPayBill2()
    {
        return cy.get('#payBill > .mat-mdc-button-touch-target')
    }

    getSuccessMsg()
    {
        return cy.get('.recharge-successful')
    }
}
export default postPaidRechargePage