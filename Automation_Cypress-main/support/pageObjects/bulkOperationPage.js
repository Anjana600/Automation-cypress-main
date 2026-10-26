class bulkOperation{
    getCommissionID()
    {
        return cy.get('#P_APPR_L1_COMMISSION')
    }
   getBulkOperationID()
   {
    return cy.get('#toggle-1-button > span')
   }
    getBatchName()
    {
        return cy.get('#batchNameId')
    }
    getChooseFile()
    {
        return cy.xpath('//*[@type="file"]').selectFile("Cypress/downloads",{ force: true })
    }
    getSubmit()
    {
        return cy.get('#submitId > span.mat-mdc-button-touch-target')
    }
    getConfirmID()
    {
        return cy.get('#confirmId > span.mat-mdc-button-touch-target')
    }
    getBatchNameForSuccessPage()
    {
        return cy.get('body > ngb-modal-window > div > div > div.modal-body > div > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > label')
    }
    getDoneID()
    {
        return cy.get('#doneId > span.mat-mdc-button-touch-target')
    }

    getEnterBatchName()
    {
        return cy.get('#approval-list-container > div.row.ng-tns-c3115620516-9.ng-star-inserted > div.col-12.col-sm-6.col-xl-5.searchlbldif.ng-tns-c3115620516-9.ng-star-inserted > div > input')
    }
    
}export default bulkOperation