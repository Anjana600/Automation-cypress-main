class Approval1StockDeduction{
    getNetworkStock()
    {
        return cy.get('#P_NWSTKAPPRL')
    }
    getDeduction()
    {
        return cy.get('#bulkToggle-button > .mat-button-toggle-label-content')
    }
    getApprove()
    {
        return cy.get('#editLink > label.ng-tns-c3656271221-41')
    }
    getProceed()
    {
        return cy.get('.proceedBtn > .mat-mdc-button-touch-target')
    }
    getApproveBtn()
    {
        return cy.get('#saveAndSubmitBtn > span.mat-mdc-button-touch-target')
    }
    getDone()
    {
        return cy.get('#anotherRecharge > span.mat-mdc-button-touch-target')
    }

}
export default Approval1StockDeduction