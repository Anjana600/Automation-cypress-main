class associateO2CTransferRulePage
{

    getO2C()
    {
        return cy.get('#P_NW_TRF_RULES_O2C')
    }
    getSelectDomain()
    {
        return cy.get('#domainCode > div > div > div.ng-input')
    }
    getDomainDropdown()
    {
        return cy.get('ng-dropdown-panel').contains('09asa')
    }
    getProceed()
    {
        return cy.get('.btn > .mdc-button__label')
    }
    getAddTransferRule()
    {
        return cy.get('#addTransferRuleButton > .mdc-button__label')
    }
    getCategoryDropdown()
    {
        return cy.get('#toCategory > .ng-select-container > .ng-value-container > .ng-input')
    }
    getSelectFromCategoryDropdown()
    {
        return cy.get('ng-dropdown-panel').contains('asad13')
    }
    getFirstApprovalLimit()
    {
        return cy.get(':nth-child(1) > .value > .col-xl-12 > .form-control')
    }
    getSecondApprovalLimit()
    {
        return cy.get(':nth-child(3) > [style="padding: 10px 20px 20px 40px;"] > :nth-child(1) > .list-filter-container > .row > :nth-child(2) > .value')
    }
    getSelectPostETopup()
    {
        return cy.get('#mat-mdc-checkbox-1-input')

        
    }
    getAddButton()
    {
        return cy.get('.afterproceed-btn > .mdc-button__label')
    
    }

    getSuccessMsg()
    {
        return cy.get('#modal-basic-title')//Transfer rules added successfully
    
    }
   

}
export default associateO2CTransferRulePage