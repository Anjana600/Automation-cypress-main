class viewChannelUserDetails{
    getChannelUserName()
    {
        return cy.get('body > app-root > div > app-layout > section > app-home > div.container-fluid.ng-tns-c1785428629-2.ng-trigger.ng-trigger-routerTransition > div.row.mr-0.mb-3.ng-tns-c1785428629-2.ng-star-inserted > div > div > div.col-xl-4.userDetailsDivision.ng-tns-c1785428629-2 > div.col-xl-8.ng-tns-c1785428629-2 > div.nameheading.ng-tns-c1785428629-2')
    }
    getChannelUserCategory()
    {
        return cy.get('body > app-root > div > app-layout > section > app-home > div.container-fluid.ng-tns-c1785428629-2.ng-trigger.ng-trigger-routerTransition > div.row.mr-0.mb-3.ng-tns-c1785428629-2.ng-star-inserted > div > div > div.col-xl-4.userDetailsDivision.ng-tns-c1785428629-2 > div.col-xl-8.ng-tns-c1785428629-2 > div.col-xl-12.categoryheading.pl-0.ng-tns-c1785428629-2')
    }
    getChannelUserMobileNumber()
    {
        return cy.get('body > app-root > div > app-layout > section > app-home > div.container-fluid.ng-tns-c1785428629-2.ng-trigger.ng-trigger-routerTransition > div.row.mr-0.mb-3.ng-tns-c1785428629-2.ng-star-inserted > div > div > div.col-xl-4.userDetailsDivision.ng-tns-c1785428629-2 > div.col-xl-12.detailheading.pr-0.ng-tns-c1785428629-2.ng-star-inserted > div.col-xl-5.pl-0.mb-1.pr-0.ng-tns-c1785428629-2')
    }
    getChannelEmail()
    {
        return cy.get('body > app-root > div > app-layout > section > app-home > div.container-fluid.ng-tns-c1785428629-2.ng-trigger.ng-trigger-routerTransition > div.row.mr-0.mb-3.ng-tns-c1785428629-2.ng-star-inserted > div > div > div.col-xl-4.userDetailsDivision.ng-tns-c1785428629-2 > div.col-xl-12.detailheading.pr-0.ng-tns-c1785428629-2.ng-star-inserted > div.col-xl-7.pl-0.mail.ng-tns-c1785428629-2.ng-star-inserted')
    }

    getAddWidget()
    {
        return cy.get('#addWidget')
    }
    getGraphDropdown()
    {
        return cy.get('<ng-select _ngcontent-ng-c1785428629="" id="graphSelect1" type="text" bindlabel="name" formcontrolname="graphSelected" class="form-control widthSel ng-tns-c1785428629-2 ng-select ng-select-single ng-pristine ng-invalid ng-touched"><div class="ng-select-container"><div class="ng-value-container"><div class="ng-placeholder">Select</div><!----><!----><div role="combobox" aria-haspopup="listbox" class="ng-input" aria-expanded="false"><input aria-autocomplete="list" type="text" autocorrect="off" autocapitalize="off" autocomplete="a99ff523420a" readonly=""></div></div><!----><!----><span class="ng-arrow-wrapper"><span class="ng-arrow"></span></span></div><!----></ng-select>')
    }
    getSelectGraph()
    {
        return cy.get('ng-dropdown-panel').contains('DVD Recharge')
    }
    getSaveWidget()
    {
        return cy.get('#generate_btn_id2 > span.mat-mdc-button-touch-target')
    }
    getSave()
    {
        return cy.get('#save_btn_id > span.mat-mdc-button-touch-target')
    }
    getSettings()
    {
        return cy.get('#control > div.row.topRow.ng-tns-c1785428629-2 > div.col-xl-5.col-lg-5.col-md-5.col-sm-12.col-12.ng-tns-c1785428629-2 > div > div.col-xl-2.col-md-2.col-sm-2.col-2.text-right.ng-tns-c1785428629-2 > div > input')
    }
    getEdit()
    {
        return cy.get('#edit')
    }
    getRemove()
    {
        return cy.get('#viewRemoveLabel')
    }

}
export default viewChannelUserDetails