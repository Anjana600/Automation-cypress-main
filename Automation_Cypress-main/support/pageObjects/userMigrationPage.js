class userMigrationPage{
    getSelect()
    {
        return cy.get('.form-control')
    }
    getSelectDomainType()
    {
        return cy.get('ng-dropdown-panel').contains('DQAdomain01')
    }
    getDownloadTemplate()
    {
        return cy.get('#userTemplateId > .ng-tns-c3177458078-7')
    }
    getUploadTemplate()
    {
        return cy.xpath('//*[@type="file"]').selectFile("cypress/downloads/CORPBLKUSR05072024_173408.xlsx",{ force: true })
    }
    getSumbit()
    {
        return cy.get('#controlpref-list-container1 > div.row.ng-tns-c4082462325-48.ng-star-inserted > div.col-12.col-sm-8.col-xl-12.text-center.btngroups.ng-tns-c4082462325-48 > button.btn.btn-lg.rounded-btn2.ml-2.mlSty.ng-tns-c4082462325-48.mdc-button.mat-mdc-button.mat-unthemed.mat-mdc-button-base > span.mat-mdc-button-touch-target')
    }
    getConfirm()
    {
        return cy.get('#doneBtn > span.mat-mdc-button-touch-target')
    }
    getDoneButton()
    {
        return cy.get('#anotherRecharge > span.mat-mdc-button-touch-target')
    }
}
export default userMigrationPage