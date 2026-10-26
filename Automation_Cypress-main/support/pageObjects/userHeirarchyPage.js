class userHeirarchy{
    getUserHeirarchy()
    {
        return cy.get('.text-left > :nth-child(2)')
    }
    getMobileNumber()
    {
        return cy.get('#name')
    }
    getProceedButton()
    {
        return cy.get('.rounded-btn > .mdc-button__label')
    }
    getSelectUser()
    {
        return cy.get('#user-hierarchy > div.hierarchy-container.ng-tns-c2399162825-7.ng-star-inserted > div.row.mb-3.ng-tns-c2399162825-7 > div.col-12.col-sm-10.col-xl-4.ng-tns-c2399162825-7 > ng-select > div > div')
    }
    getSelectUserFromDropdown()
    {
        return cy.get('ng-dropdown-panel').contains('dqa31')
    }
    getGoBtn()
    {
        return cy.get('#user-hierarchy > div.hierarchy-container.ng-tns-c2399162825-7.ng-star-inserted > div.row.mb-3.ng-tns-c2399162825-7 > div.col-12.col-sm-2.col-xl-1.ng-tns-c2399162825-7 > button > span.mat-mdc-button-touch-target')
    }
    getSuspendedOrTransferHeirarchy()
    {
        return cy.get('#download_btn')
    }
    getSuspendedHeirarchyProceedBtn()
    {
        return cy.get('body > ngb-modal-window > div > div > div.modal-footer > button > span.mat-mdc-button-touch-target')
    }
    getSuspendedHeirarchyDoneBtn()
    {
        return cy.get('body > ngb-modal-window:nth-child(9) > div > div > div.modal-footer > button > span.mat-mdc-button-touch-target')
    }
    getGeographicalDomain()
    {
        return cy.get('body > ngb-modal-window > div > div > div.modal-body > div.container-fluid.justify-content-around.ng-tns-c2399162825-7 > div:nth-child(6) > div.col-xl-3.ng-tns-c2399162825-7 > div > ng-select')
    }
    getSelectGeographicalDomain()
    {
        return cy.get('ng-dropdown-panel').contains('Zoneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
    }
    getOwnerOrParentUser()
    {
        return cy.get('#name')
    }
    getSearch()
    {
        return cy.get('body > ngb-modal-window > div > div > div.modal-body > div.container-fluid.justify-content-around.ng-tns-c2399162825-11 > div:nth-child(6) > div:nth-child(2) > div > img.searchUser.ng-tns-c2399162825-11')
    }
    getSelectOwner()
    {
        return cy.get('body > ngb-modal-window:nth-child(9) > div > div > div.modal-body.searchUser > ul > li.ng-tns-c2399162825-7.ng-star-inserted.selected')
    }
    getOwnerSubmit()
    {
        return cy.get('body > ngb-modal-window:nth-child(9) > div > div > div.modal-footer > button > span.mat-mdc-button-touch-target')
    }
    getHeirarchyProceedBtn()
    {
        return cy.get('body > ngb-modal-window > div > div > div.modal-body > div.row.ng-tns-c2399162825-7 > div > button > span.mat-mdc-button-touch-target')
    }
    getHeirarchyDoneBtn()
    {
        return cy.get('body > ngb-modal-window:nth-child(9) > div > div > div.modal-footer > button > span.mat-mdc-button-touch-target')
    }
}
export default userHeirarchy