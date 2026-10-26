class batchc2cBulkOperationPage{
    getBulkC2COperation()
    {
        return cy.get('#bulkToggle-button > span')
    }
    getC2CCategory()
    {
        return cy.get('#categoryId')
    }
    getSelectC2CCategory()
    {
        return cy.get('ng-dropdown-panel').contains('DQACATArea')
    }
    getDownloadTemplateC2C()
    {
        return cy.get('#userTemplateId')
        // #userTemplateId > img
    }
    getBatchNameID()
    {
        return cy.get('#batchNameId')
    }
    getChooseTemplate()
    {
        return cy.xpath('//*[@type="file"]').selectFile("Cypress/downloads",{ force: true })
    }
    getC2CSubmitID()
    {
        return cy.get('#submitId > span.mat-mdc-button-touch-target')
    }
    getC2CPin()
    {
        return cy.get('##no-partitioned')
    }
    getC2CConfirm()
    {
        return cy.get('#confirmId > span.mat-mdc-button-touch-target')
    }
    getBatchIDForSuccessPage()
    {
        return cy.get('body > ngb-modal-window > div > div > div.modal-body > div > div > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > label')
    }
    getSearchByBatchID()
    {
        return cy.get('#approval-list-container > div:nth-child(1) > div.col-12.col-sm-6.col-xl-5.searchlbldif.ng-tns-c2577776230-32.ng-star-inserted > div > input')
    }
    getC2CDone()
    {
        return cy.get('#doneId > span.mat-mdc-button-touch-target')
    }
    }export default batchc2cBulkOperationPage