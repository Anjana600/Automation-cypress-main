export default class O2CCommission{

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
    return cy.get('ng-dropdown-panel').contains('DQAdomain01')
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

   getCommissionPayout()
   {
    return cy.get('ng-dropdown-panel').contains('Commission Payout')
   }

   getDownloadTemplateID()
   {
     return cy.get('#userTemplateId > img')
   }

   getChooseFileID()
    {
        //return cy.xpath('//*[@type="file"]').selectFile("C:/Users/niharika.challa/Downloads/CORPBLKUSR05072024_173408.xlsx",{ force: true })
        return cy.xpath('//*[@type="file"]')
    }

}