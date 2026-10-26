class addBulkOperatorUser{

    getBulkTab()
    {
        return cy.get('#bulk > span.mat-mdc-button-touch-target')
    }
    getCategory()
    {
        return cy.get('#categoryId')
    }
    getSelectCategory()
    {
        return cy.get('ng-dropdown-panel').contains('Sub Super Admin')
    }
    getBatchname()
    {
        return cy.get('#batchNameId')
    }
    getDownloadTemplate()
    {
        return cy.get('#userListId > img')
    }
    getChooseTemplate()
    {
        return cy.xpath('//*[@type="file"]').selectFile("Cypress/downloads",{ force: true })
    }
    getSubmit()
    {
        return cy.get('#submitId > span.mat-mdc-button-touch-target')
    }
    getConfirm()
    {
        return cy.get('#confirmId > span.mat-mdc-button-touch-target')
    }
    getDoneid()
    {
        return cy.get('#anotherRecharge > span.mat-mdc-button-touch-target')
    }
    }export default addBulkOperatorUser