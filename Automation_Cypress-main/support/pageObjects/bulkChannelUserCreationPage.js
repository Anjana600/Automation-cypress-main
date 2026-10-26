class bulkChannelUserCreationPage{
    getBulkOperation()
    {
        return cy.get('#lookup > .ng-select-container > .ng-value-container > .ng-input')
    }
    getBatchName()
    {
        return cy.get('ng-dropdown-panel').contains('Channel User Bar Type')
    }
    getDomainDropdown()
    {
        return cy.get('.rounded-btn > .mdc-button__label')
    }
    getSelectFromDomainDropdown()
    {
        return cy.get('.mat-button-wrapper')
    }
    getGeographyDropdown()
    {
        return cy.get('#subLookUpName')
    }
    getSelectFromGeographyDropdown()
    {
        return  cy.get('#doneBtn > span.mdc-button__label')
    }
    getDownloadBlankTemplate()
    {
        return  cy.get('.status-change-successful1')
    }
    getUploadFile()
    {
        return  cy.get('.status-change-successful1')
    }
    getSubmit()
    {
        return  cy.get('.status-change-successful1')
    }

   
}
export default bulkChannelUserCreationPage