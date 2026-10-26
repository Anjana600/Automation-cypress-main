class batchModifyC2SCardGroupPage{
  
    getBulk()
    {
        return cy.get('[value="unbar"] > #toggle-1-button > .mat-button-toggle-label-content')
    }
    getServiceTypeDropdown()
    {
        return cy.get('#serviceType > .ng-select-container')
    }
    getSelectFromServiceTypeDropdown()
    {
        return cy.get('.mat-button-wrapper')
    }
    getDate()
    {
        return cy.get('.ui-inputtext')
    }
    getSelectAll()
    {
        return  cy.get('#mat-mdc-checkbox-1-input')
    }
    getDownloadFile()
    {
        return  cy.get('.status-change-successful1')
    }
    getUploadFile()
    {
        return cy.get('.clickarea.ng-star-inserted > .clickarea')
    }
    getSubmit()
    {
        return  cy.get('#submitId > .mdc-button__label')
    }


   
   }
export default batchModifyC2SCardGroupPage