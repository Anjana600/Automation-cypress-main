class messageGatewayPage{
    getAddButton()
    {
        return cy.get('#single')
    }
    getGatewayCode()
    {
        return cy.get('input#gatewayCode')
    }

    getGatewayName()
    {
        return cy.get('#gatewayname')
    }
    getGatewayType()
    {
        return cy.get('#gatewaytype')
    }
    getSelectGatewayType()
    {
        return cy.get('ng-dropdown-panel').contains('ETXGW')
    }
    getProtocol()
    {
        return cy.get('.ng-star-inserted > .form-control > .ng-select-container > .ng-arrow-wrapper')
    }
    getSelectProtocolType()
    {
        return cy.get('ng-dropdown-panel').contains('HTTP')
    }
    getHost()
    {
        return cy.get('#host')
    }
    getSubmit()
    {
        return cy.get('.rounded-btn > .mat-mdc-button-touch-target')
    }
    getConfirm()
    {
        return cy.get('#doneBtn > span.mdc-button__label')
    }
}
export default messageGatewayPage