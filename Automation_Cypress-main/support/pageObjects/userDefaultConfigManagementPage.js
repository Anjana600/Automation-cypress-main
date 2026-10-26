class userDefaultConfigManagementPage
{
    getbulkCategoryWiseDefaultProfile()
    {
        return cy.get('#P_NW_BULK_CAT_PROF > span')
    }
    getSelectDomainDropdown()
    {
        return cy.get('.form-control')
    }
    getSelectFromDomainDropdown()
    {
        return cy.get('ng-dropdown-panel').contains('DQAdomain01')
    }
    getDownloadTemplate()
    {
        // return cy.get('#userListId > .ng-tns-c1730615656-15')
        return cy.get('#userListId > img')
    }
    getChooseFile() {
        return cy.xpath('//*[@type="file"]');
    }
    getSubmit()
    {
        return cy.get('.save-btn > .mdc-button__label')
    }
   
}
export default userDefaultConfigManagementPage