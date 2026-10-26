class staffUserManagement{
    getDeduction()
    {
        return cy.get('#bulkToggle-button > span')
    }
    getWalletType()
    {
        return cy.get('#moduleCode')
    }
    getSelectWalletType()
    {
        return cy.get('ng-dropdown-panel').contains('Sale')
    }
    getProceed()
    {
        return cy.get('#controlpref-list-container1 > div.row.ng-tns-c4082462325-48.ng-star-inserted > div.col-12.col-sm-8.col-xl-12.text-center.btngroups.ng-tns-c4082462325-48 > button.btn.btn-lg.rounded-btn2.ml-2.mlSty.ng-tns-c4082462325-48.mdc-button.mat-mdc-button.mat-unthemed.mat-mdc-button-base > span.mat-mdc-button-touch-target')
    }
    getPostRequestedQuantity()
    {
        return cy.get(':nth-child(1) > :nth-child(6) > #denomprofile > #modifiedValue')
    }
    getETopUpRequestedQuantity()
    {
        return cy.get(':nth-child(2) > :nth-child(6) > #denomprofile > #modifiedValue')
    }
    getProceedButton()
    {
        return cy.get('#control > div.col-12.col-sm-8.col-xl-12.text-center.ng-tns-c4082462325-12.ng-star-inserted > button.btn.btn-lg.rounded-btn2.ml-2.roundedBtn.mdc-button.mat-mdc-button.ng-tns-c4082462325-12.mat-unthemed.mat-mdc-button-base.ng-star-inserted > span.mat-mdc-button-touch-target')
    }
    getOk()
    {
        return cy.get('#doneBtn > span.mdc-button__label')
    }
}
export default staffUserManagement