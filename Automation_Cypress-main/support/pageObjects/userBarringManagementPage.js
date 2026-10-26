class userBarringManagementPage{
    getBarUser()
    {
        return cy.get("#login_id")
    }

    getUnbarUser()
    {
        return cy.get('#mat-button-toggle-3-button > .mat-button-toggle-label-content > .label-text > .input-label')
    }

    getBulk()
    {
        return cy.get('#mat-button-toggle-5-button > .mat-button-toggle-label-content > .label-text > .input-label')
    }
    getModuleDropdown()
    {
        return cy.get('#barring-management > form > div > div.row.mb-4 > div:nth-child(1) > ng-select > div > div')
    }
    getSelectFromModuleDropdown()
    {
        return cy.get('ng-dropdown-panel').contains('Channel to Subscriber')
    }
    getBarredAsDropdown()
    {
        return cy.get('#barring-management > form > div > div.row.mb-4 > div:nth-child(2) > ng-select > div > div > div.ng-input')
    }
    getSelectFromBarredAsDropdown()
    {
        return cy.get('ng-dropdown-panel').contains('Receiver')
    }
    getBarringTypeDropdown()
    {
        return cy.get(':nth-child(2) > :nth-child(1) > .form-control > .ng-select-container > .ng-arrow-wrapper')
    }
    getSelectFromBarringTypeDropdown()
    {
        return cy.get(':nth-child(2) > .col-12 > .form-control > .ng-select-container > .ng-arrow-wrapper')
    }
    getBarringReasonDropdown()
    {
        return cy.get('.btn')
    }
    getSelectFromBarringReasonDropdown()
    {
        return cy.get('.btn')
    }
    getUploadFile()
    {
        return cy.get('.btn')
    }
    getSumbit()
    {
        return cy.get('.btn')
    }
}
export default userBarringManagementPage