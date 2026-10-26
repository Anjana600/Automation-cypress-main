class domainManagementPage{
    getaddDomain()
    {
        return cy.get('.mat-button-wrapper > .ng-tns-c2846578856-8')
    }

    getDomainDropdown()
    {
        return cy.get(':nth-child(1) > .form-control > .ng-select-container > .ng-arrow-wrapper')
    }
    getSelectFromDomainDropdown()
    {
        return cy.get('ng-dropdown-panel').contains('Distributor Channel')
    }
    getDomaincode()
    {
        return cy.get('#domainCode')
    }
    getDomainName()
    {
        return cy.get('#domainName')
    }
    getNoOfCategories()
    {
        return cy.get('#noOfCategories')
    }
    getproceed()
    {
        return cy.get('#proceedBtnId > .mdc-button__label')
    }
    getCategoryCode()
    {
        return cy.get('#categoryCode')
    }
    getCategoryName()
    {
        return cy.get('#categoryName')
    }
    getGeographyDropdown()
    {
        return cy.get(':nth-child(3) > .form-control > .ng-select-container > .ng-arrow-wrapper')
    }
    getSelectFromGeographyDropdown()
    {
        return cy.get('ng-dropdown-panel').contains('Zone')
    }

    getRoletypeDropdown()
    {
        return cy.get(':nth-child(2) > :nth-child(4) > .form-control > .ng-select-container > .ng-arrow-wrapper')
    }
    getSelectFromRoletypeDropdown()
    {
        return cy.get('ng-dropdown-panel').contains('Fixed')
    }
    getUserIdPrefix()
    {
        return cy.get('#userIdPrefix')
    }
    getNext()
    {
        return cy.get('#proceedBtnId > .mdc-button__label')
    }
    getOwnerRoleDetailsSelectAll()
    {
        return cy.get('#mat-mdc-checkbox-13-input')
    }
    getNext1()
    {
        return cy.get('.ng-star-inserted.ng-dirty > .buttonGap > .col-xl-2.col-12 > #nextRolesbtn > .mdc-button__label')
    }
    getOwnerAllowedSourcesSelectAll()
    {
        return cy.get('#mat-mdc-checkbox-1-input')
    }
    getNext2()
    {
        return cy.get('#cdk-step-content-0-2 > .ng-star-inserted.ng-dirty > .buttonGap > .col-xl-2.col-12 > #nextRolesbtn > .mdc-button__label')
    }
    getOwnerLoginDetailsSelectAll()
    {
        return cy.get('#mat-mdc-checkbox-2-input')
    }
    getMinTxn()
    {
        return cy.get('#maximumTransactionMobileNumber')
    }
    getMaxLoginCount()
    {
        return cy.get('[style="margin: 0 0 0 10px;"] > :nth-child(2) > .form-control')
    }
    getAuthenticationDropdown()
    {
        return cy.get('[style="margin-left: 16px;"] > .form-control > .ng-select-container > .ng-arrow-wrapper')
    }
    getSelectFromAuthenticationDropdown()
    {
        return cy.get('ng-dropdown-panel').contains('LDAP')
    }
    getRestrictedListManagementSelectAll()
    {
        return cy.get('#mat-mdc-checkbox-10-input')
    }
    getSaveAndSubmit()
    {
        return cy.get('#saveAndSubmitBtn > .mdc-button__label')
    }
    getDomainAddedSuccessMsg()
    {
        return cy.get('#responseMsg')
    }
   
   


}
export default domainManagementPage

