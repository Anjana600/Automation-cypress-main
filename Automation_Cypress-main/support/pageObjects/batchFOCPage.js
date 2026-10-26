class batchFOC{
    getCommissionID()
    {
        return cy.get('#P_O2C_COMM')
    }
   getBulkOperationID()
   {
    return cy.get('#bulkToggle-button > .mat-button-toggle-label-content')
   }
   getGeographyDopdown()
   {
       return cy.get(':nth-child(1) > #categoryId > .ng-select-container > .ng-arrow-wrapper')
   }
   getZoneID()
   {
    return cy.get('ng-dropdown-panel').contains('Zoneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
   }
   getDomaindropDown()
   {
    return cy.get(':nth-child(2) > #categoryId > .ng-select-container > .ng-arrow-wrapper')
   }
   getDomainValue()
   {
    return cy.get('ng-dropdown-panel').contains(' DQAdomain01')
   }
   getUserCategoryDropdown()
   {
    return cy.get(':nth-child(3) > #categoryId > .ng-select-container > .ng-arrow-wrapper')
   }
   getCategoryValue()
   {
    return cy.get('ng-dropdown-panel').contains('DQACategory')
   }
   getProductDropdown()
   {
    return cy.get(':nth-child(4) > #categoryId > .ng-select-container > .ng-arrow-wrapper')
   }
   getEtopupValue()
   {
    return cy.get('ng-dropdown-panel').contains('eTopUP')
   }
   getOperationDropdown()
   {
    return cy.get('#operation > .ng-select-container > .ng-arrow-wrapper')
   }
   getFreeOfCost()
   {
    return cy.get('ng-dropdown-panel').contains('Free of Cost(FOC)')
   }
   getDownloadTemplateID()
   {
    cy.get('#userTemplateId > img')
   }
    getBatchName()
    {
        return cy.get('#batchNameId')
    }
    getChooseFile()
    {
        return cy.xpath('//*[@type="file"]').selectFile("Cypress/downloads",{ force: true })
    }
    getSubmit()
    {
        return cy.get('#submitId > span.mat-mdc-button-touch-target')
    }
    getConfirmID()
    {
        return cy.get('#confirmId > span.mat-mdc-button-touch-target')
    }
    getBatchNameForSuccessPage()
    {
        return cy.get('body > ngb-modal-window > div > div > div.modal-body > div > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > label')
    }
    getDoneID()
    {
        return cy.get('#doneId > span.mat-mdc-button-touch-target')
    }
    getEnterBatchName()
    {
        return cy.get('#approval-list-container > div.row.ng-tns-c3115620516-9.ng-star-inserted > div.col-12.col-sm-6.col-xl-5.searchlbldif.ng-tns-c3115620516-9.ng-star-inserted > div > input')
    }
    getCommissionLevel1()
    {
        return cy.get('#P_APPR_L1_COMMISSION')
    }
   getBulkOperation()
   {
    return cy.get('#toggle-1-button > span')
   }
   getApprovalOne()
   {
    return cy.get('#approvalLevelO2CTableBody > tr:nth-child(1) > td.ng-tns-c3115620516-21.dtfc-fixed-right > span:nth-child(1)')
   }
   getApprovalTwoAndThree()
   {
    return cy.get('#approve > span.mat-mdc-button-touch-target')
   }
   getYesBtn()
   {
    return cy.get('#approveConfirmYes > span.mat-mdc-button-touch-target')
   } 
   getDoneBtn()
   {
    return cy.get('#anotherRecharge > span.mat-mdc-button-touch-target')
   } 
   getCommissionLevel2()
    {
        return cy.get('#P_APPR_L2_COMMISSION')
    }
    getCommissionLevel3()
    {
        return cy.get('#P_APPR_L3_COMMISSION')
    }
    
}export default batchFOC