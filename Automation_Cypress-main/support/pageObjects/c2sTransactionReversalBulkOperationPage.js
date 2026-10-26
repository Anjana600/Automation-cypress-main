class c2sTransactionReversalBulkOperationPage
{
    getBulkOperation()
    {
        return cy.get('#P_NW_TRF_RULES_O2C')
    }
    getDownloadFileTemplate()
    {
        return cy.get('#domainCode > div > div > div.ng-input')
    }
    getEnterBatchName()
    {
        return cy.get('ng-dropdown-panel').contains('09asa')
    }
    getUploadFile()
    {
        return cy.get('.btn > .mdc-button__label')
    }
    getProceed()
    {
        return cy.get('#addTransferRuleButton > .mdc-button__label')
    }
   
}      
export default c2sTransactionReversalBulkOperationPage