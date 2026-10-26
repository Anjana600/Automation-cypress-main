class c2sBulkPage{
    getBulkOperation()
    {
        return cy.get('#lookup > .ng-select-container > .ng-value-container > .ng-input')
    }
    getBulkPrepaidOperation()
    {
        return cy.get('ng-dropdown-panel').contains('Channel User Bar Type')
    }
    getDownloadTemplate()
    {
        return cy.get('.rounded-btn > .mdc-button__label')
    }
    getUploadFile()
    {
        return cy.get('.mat-button-wrapper')
    }
    getScheduleNow()
    {
        return cy.get('#subLookUpName')
    }
    getDate()
    {
        return  cy.get('#doneBtn > span.mdc-button__label')
    }
    getOccurrence()
    {
        return  cy.get('.status-change-successful1')
    }
    getNoOfDays()
    {
        return  cy.get('.status-change-successful1')
    }
    getSubmit()
    {
        return  cy.get('.status-change-successful1')
    }

   
}
export default c2sBulkPage