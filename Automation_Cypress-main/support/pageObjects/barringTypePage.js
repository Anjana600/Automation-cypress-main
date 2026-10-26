class barringTypePage{
    getLookupNameDropdown()
    {
        return cy.get('#lookup > .ng-select-container > .ng-value-container > .ng-input')
    }
    getSelectFromLookupnamedropdown()
    {
        return cy.get('ng-dropdown-panel').contains('Channel User Bar Type')
    }
    getProceedButton()
    {
        return cy.get('.rounded-btn > .mdc-button__label')
    }
    getAddButton()
    {
        return cy.get('.mat-button-wrapper')
    }
    getSublookupNameField()
    {
        return cy.get('#subLookUpName')
    }
    getaddbtn()
    {
        return  cy.get('#doneBtn > span.mdc-button__label')
    }
    getSublookSuccessMsg()
    {
        return  cy.get('.status-change-successful1')
    }

   
   }
export default barringTypePage