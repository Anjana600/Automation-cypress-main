class changePinPage{
    getSecuritySettings()
    {
        return cy.get('#userdropdown > div > div.text-left > div.ng-star-inserted')
    }
    getPin()
    {
        return cy.get('#mat-button-toggle-1')
    }
    getOldPin()
    {
        return cy.get('#oldPin')
    }
    getNewPin()
    {
        return cy.get('#newPin')
    }
    getConfirmPin()
    {
        return cy.get('#confirmPin')
    }
    getRemarks()
    {
        return cy.get('#remarks')
    }
    getChangePinSubmitBtn()
    {
        return cy.get('#changePinSubmit > span.mat-mdc-button-touch-target')
    }
    getConfirmYesBtn()
    {
        return cy.get('#rejectConfirmYes > span.mat-mdc-button-touch-target')
    }
    getChangePinDoneBtn()
    {
        return cy.get('#doneBtn > span.mat-mdc-button-touch-target')
    }
}
export default changePinPage