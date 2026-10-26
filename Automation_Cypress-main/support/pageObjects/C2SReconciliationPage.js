class C2SReconciliation{
    getDateRange()
    {
        return cy.get('#range')
    }
    getStartDate()
    {
        return cy.get('#promotional-datefield > p-calendar > span > div > div > div > div.p-datepicker-calendar-container.ng-tns-c419082668-12.ng-star-inserted > table > tbody > tr:nth-child(1) > td:nth-child(2) > span')
    }
    getEndDate()
    {
        return cy.get('#promotional-datefield > p-calendar > span > div > div > div > div.p-datepicker-calendar-container.ng-tns-c419082668-12.ng-star-inserted > table > tbody > tr:nth-child(5) > td:nth-child(3) > span')
    }
    getService()
    {
        return cy.get('#service')
    }
    getSelectService()
    {
        return cy.get('ng-dropdown-panel').contains('Customer Recharge')
    }
    getProceedButton()
    {
        return cy.get('#control > form > div.row.pb-3.ng-tns-c843457955-10.ng-star-inserted > div.col-12.col-sm-12.col-xl-4.text-right.ng-tns-c843457955-10 > button.btn.btn-lg.rounded-btn.ml-2.ng-tns-c843457955-10.mdc-button.mat-mdc-button.mat-unthemed.mat-mdc-button-base > span.mat-mdc-button-touch-target')
    }
    getEditButton()
    {
        return cy.get('#editLink > label')
    }
    getSuccessButton()
    {
        return cy.get('#control > div.row.pb-3.ng-tns-c1443225818-13 > div.col-12.col-sm-12.col-xl-4.text-right.ng-tns-c1443225818-13 > button.btn.btn-lg.rounded-btn.ml-2.ng-tns-c1443225818-13.mdc-button.mat-mdc-button.mat-unthemed.mat-mdc-button-base > span.mat-mdc-button-touch-target')
    }
    getFailButton()
    {
        return cy.get('#control > div.row.pb-3.ng-tns-c1443225818-13 > div.col-12.col-sm-12.col-xl-4.text-right.ng-tns-c1443225818-13 > button.btn.btn-lg.reset-btn.rounded-btn2.ng-tns-c1443225818-13.mdc-button.mat-mdc-button.mat-unthemed.mat-mdc-button-base > span.mat-mdc-button-touch-target')
    }
}
export default C2SReconciliation