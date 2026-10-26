class bulkChannelUserCreationByChannelUser
{
    getBulk()
    {
        return cy.get('#P_NW_TRF_RULES_O2C')
    }
    getBatchName()
    {
        return cy.get('#domainCode > div > div > div.ng-input')
    }
    getDownloadTemplate()
    {
        return cy.get('ng-dropdown-panel').contains('09asa')
    }
    getUploadFile()
    {
        return cy.get('.btn > .mdc-button__label')
    }
    getSubmit()
    {
        return cy.get('#addTransferRuleButton > .mdc-button__label')
    }
    
}
export default bulkChannelUserCreationByChannelUser