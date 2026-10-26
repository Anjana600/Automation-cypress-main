export default class userMigrationAcrossDomain{

    getDomainDropdownID()
    {
        return cy.get('.form-control > .ng-select-container')
    }

    getCorporateinDropdownID()
    {
        return cy.get("ng-select").contains("Corporate")
    }

    getDownloadTemplateID()
    {
        return cy.get('#userTemplateId > .ng-tns-c3177458078-7')
    }

    getChooseFileID()
    {
        //return cy.xpath('//*[@type="file"]').selectFile("C:/Users/niharika.challa/Downloads/CORPBLKUSR05072024_173408.xlsx",{ force: true })
        return cy.xpath('//*[@type="file"]').selectFile("C:/Users/niharika.challa/Downloads/CORPBLKUSR05072024_173408.xlsx",{ force: true })
    }


}