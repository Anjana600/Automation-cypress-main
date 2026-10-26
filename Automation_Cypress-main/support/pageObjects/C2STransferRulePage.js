class C2STransferRule{
    getAddTransferRule()
    {
        return cy.get('#addTransferRuleButton > .mdc-button__label')
    }
    getChannelDomain()
    {
        return cy.get('#domainCode')
    }
    getSelectChannelDomain()
    {
        return cy.get('ng-dropdown-panel').contains('DQAdomain01')
    }
    getChannelCategory()
    {
        return cy.get('#categoryCode')
    }
    getSelectChannelCategory()
    {
        return cy.get('ng-dropdown-panel').contains('DQACategory')
    }
    getChannelGrade()
    {
        return cy.get('#gradeCode')
    }
    getSelectChannelGrade()
    {
        return cy.get('ng-dropdown-panel').contains('DQA Cat Grade')
    }
    getReceiverType()
    {
        return cy.get('#receiverType')
    }
    getSelectReceiverType()
    {
        return cy.get('ng-dropdown-panel').contains('Prepaid Subscriber')
    }
    getReceiverServiceClass()
    {
        return cy.get('#receiverServiceClass') 
    }
    getSelectReceiverServiceClass()
    {
        return cy.get('ng-dropdown-panel').contains('DQA1 (DQAServiceCode)')
    }
    getServiceType()
    {
        return cy.get('#serviceType')
    }
    getSelectServiceType()
    {
        return cy.get('ng-dropdown-panel').contains('C2S Gift Recharge')
    }
    getSubService()
    {
        return  cy.get('#subServiceCode') 
    }
    getSelectSubService()
    {
        return cy.get('ng-dropdown-panel').contains('CVG')
    }
    getCardGroupSet()
    {
        return cy.get('#cardGroupCode')
    }
    getSelectCardGroupSet()
    {
        return cy.get('ng-dropdown-panel').contains('AUT3gbMFn')
    }
    getSaveButton()
    {
        return cy.get('.rounded-btn-add > .mat-mdc-button-touch-target')
    }
    getConfirmButton()
    {
        return cy.get('#confirmButton > span.mat-mdc-button-touch-target')
    }
    getDoneButton()
    {
        return cy.get('#anotherRecharge > span.mat-mdc-button-touch-target')
    }
    getGatewayCode()
    {
        return cy.get('#gatewayCode')
    }
    getSelectGatewayCode()
    {
        return cy.get('ng-dropdown-panel').contains('All')
    }
    getStatus()
    {
        return cy.get('#statusCode')
    }
    getSelectStatus()
    {
        return cy.get('ng-dropdown-panel').contains('Active')
    }
    getProceedButton()
    {
        return cy.get('.rounded-btn > .mdc-button__label')
    }
    getSearch()
    {
        return cy.get('#trfRule-C2S-list-container > div.col-xl-12.ng-tns-c1479681107-10.ng-star-inserted > div:nth-child(2) > div > div > div > div > input')
    }
    getDelete()
    {
        return cy.get('#delete > label')
    }
    getYesButton()
    {
        return cy.get('#rejectConfirmYes > span.mat-mdc-button-touch-target')
    }
}export default C2STransferRule