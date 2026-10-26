export default class voucherDownload{
    
    getVouchertypeDropdown()
    {
        return cy.get(':nth-child(2) > :nth-child(1) > .form-control > .ng-select-container > .ng-arrow-wrapper')
    }

    getphysicaltestVouchertype()
    {
        return cy.get("ng-dropdown-panel").contains("physical test")
    }

    getVoucherSegmentID()
    {
        return cy.get(':nth-child(2) > :nth-child(2) > .form-control > .ng-select-container > .ng-arrow-wrapper')
    }

    getLocalVoucherSegmentID()
    {
        return cy.get('ng-dropdown-panel').contains("Local")
    }

    getDownloadforDropdown()
    {
        return cy.get(':nth-child(3) > .form-control > .ng-select-container > .ng-arrow-wrapper')
    }

    getthirdpartyDownload()
    {
        return cy.get('ng-dropdown-panel').contains("thirdparty")
    }

    getProceedID()
    {
        return cy.get('.rounded-btn > .mdc-button__label')
    }

    getDenominationDropdown()
    {
        return cy.get('.denoTableContent > :nth-child(1) > .form-control > .ng-select-container > .ng-arrow-wrapper')
    }

    

}