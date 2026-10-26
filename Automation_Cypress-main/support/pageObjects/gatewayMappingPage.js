class gatewayMappingPage{
    getResponseGateway()
    {
        return cy.get('#parentTable > tbody > tr:nth-child(1) > td:nth-child(3) > ul > li > a')
    }
    getSelectResponseGateway()
    {
        return cy.get('#denomprofile a.dropdown-item').contains('Demo123445')
    }
    getAlternativeResponseGateway()
    {
        return cy.get('#parentTable > tbody > tr:nth-child(1) > td:nth-child(4) > ul > li > a')
    }
    getSelectAlternativeResponseGateway()
    {
        return cy.get('#denomprofile a.dropdown-item').contains('DemoEntry1')
    }

    getProceedBtn()
    {
        return cy.get('#doneBtn > span.mat-mdc-button-touch-target')
    }
   
    getConfirmBtn()
    {
        return cy.get('ng-dropdown-panel#rejectConfirmYes > span.mat-mdc-button-touch-target')
    }
    getDoneBtn()
    {
        return cy.get('#doneBtn > span.mat-mdc-button-touch-target')
    } 
}
export default gatewayMappingPage