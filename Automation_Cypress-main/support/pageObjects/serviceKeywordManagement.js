class serviceKeywordManagement{
  
    getProceedBtn()
   {
       return cy.get('.rounded-btn > .mdc-button__label')
   }


    getAddBtn()
    {
        return cy.get('#add')
     }

     getkeyword()
     {
         return cy.get('#keyword')
     }

     getReceivePort()
     {
         return cy.get('#receivePort')
     }

     getName()
     {
         return cy.get('#name')
     }

    getServiceTypeDropdown()
     {
         return cy.get('#userDomain > div')
     }
     getSelectFromServiceTypeDropdown()
     {
         return cy.get('ng-dropdown-panel').contains("Account Information")
     }

     getMessageGatewayTypeDropdown()
     {
        return cy.get("#messageGatewayType > div > div")
     }
     getSelectMessageGatewayTypeDropdown()
     {
        return cy.get("ng-dropdown-panel").contains("REST")
     }

     getStatusTypeDropdown()
     {
         return cy.get('#ng-select-box-default > div:nth-child(4) > div:nth-child(2)')
     }
     getSelectFromStatusTypeDropdown()
     {
         return cy.get('ng-dropdown-panel').contains("Active")
     }

     getSuccessMsg()
     {
         return cy.get('#modal-basic-title')
     }
     getDonebth()
     {
         return cy.get('#doneBtn')
     }

    }


export default serviceKeywordManagement