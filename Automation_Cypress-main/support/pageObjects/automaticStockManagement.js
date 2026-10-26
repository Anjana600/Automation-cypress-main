export default class automaticStockManagement{
    
    getMSISDNID()
    {
        return cy.get('#name')
    }

    getMSISDNProceedID()
    {
        return cy.get('.rounded-btn > .mdc-button__label')
    }

    getSOSTransferToggleButton()
    {
        return cy.get(':nth-child(5) > .ng-tns-c2152851102-7 > .toggle-button-switch')
    }

    getAutoC2CToggleButton()
    {
        return cy.get('#parentTable > tbody > tr:nth-child(1) > td:nth-child(3) > toggle-button')
    }

    getSubmitButton()
    {
        return cy.get('.approveClass')
    }

    getSuccessMessage()
    {
        return cy.get('#responseMsg')
        // Association for SOS and auto C2C is Successful 
    }

    getDoneButton()
    {
        return cy.get('#doneBtn > span.mdc-button__label')
    }

    getBulkOperationID()
    {
        return cy.get('[value="Password"] > #toggle-1-button > .mat-button-toggle-label-content')
    }

    getDomainDropdown()
    {
        return cy.get('#userDomain > .ng-select-container > .ng-arrow-wrapper')
    }

    getDomainValue()
    {
        return cy.get("ng-dropdown-panel").contains("DQAdomain01")
    }

    getGeographyDropdown()
    {
        return cy.get('#userGeo > .ng-select-container > .ng-arrow-wrapper')
    }

    getGeographyValue()
    {
        return cy.get('ng-dropdown-panel').contains('Zoneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
    }

    getDownloadTemplateID()
    {
        return cy.get('.pl-0 > .col-xl-12 > #userListId > a > img')
    }

    getChooseFileID()
    {
        return cy.get('.clickarea.ng-star-inserted > .clickarea')
    }

    getSubmitID()
    {
        return cy.get('#submitId > .mdc-button__label')
    }
}