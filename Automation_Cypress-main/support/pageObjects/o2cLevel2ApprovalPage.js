class o2cLevel2ApprovalPage{
    getEtopupAmountFeildinPurchase()
    {
        return cy.get(':nth-child(2) > .row > .amountP > .form-control')
    }

    getReferenceNoforPurchase()
    {
        return cy.get('#referenceNoInput')
    }

    getRemarksFeild()
    {
        return cy.get('#textBox')
    }

    getPurchaseButton()
    {
        return cy.get('#purchaseO2c > .mdc-button__label')
    }

    getPaymentmodeDropdownforPurchase()
    {
        return cy.get('#paymentTypeSelect > .ng-select-container > .ng-arrow-wrapper')
    }

    getCashmodeforpurchase()
    {
        return cy.get('ng-dropdown-panel').contains("Cash")
    }

    getPaymentInstrumentNoforpurchase()
    {
        return cy.get('#payInstNmbrInput')
    }

    getCalenderIcon()
    {
        return cy.get('.p-button-icon')
    }

    getPaymentDateID()
    {
        return cy.get('td').contains('29')
    }

    getPurchaseButtonInReviewpage()
    {
        return cy.get('#purcahseButton > span.mdc-button__label')
    }

    getPurchaseSuccesfulText()
    {
        return cy.get('#successfultitle')
    }

    getDoneButton()
    {
        return cy.get('#doneButton > span.mdc-button__label')
    }

    getApprovalLevel1ID()
    {
        return cy.get('#P_APPR_L1')
    }

    getMobileNumberFeildID()
    {
        return cy.get('#name')
    }

    getMSISDNProceedID()
    {
        return cy.get('.rounded-btn > .mdc-button__label')
    }

    getApproveButtonforLevel1()
    {
        return cy.get(':nth-child(1) > [style="position: sticky; right: 0px;"] > :nth-child(1) > .approveClass')
    }

    getExternalTXNNumber()
    {
        return cy.get('#externalTxnNum')
    }

    getExternalTXNDate()
    {
        return cy.get('#externalTxnDatePicker > .ui-calendar > .p-element > .p-button-icon')
    }

    getReferenceNumberInApproval1()
    {
        return cy.get('#refNo')
    }

    getApproversRemarksinLevel1()
    {
        return cy.get('#textBox')
    }

    getApproveButtoninDetailsPage()
    {
        return cy.get('#approve > .mdc-button__label')
    }

    getApproveInReviewPage()
    {
        return cy.get('#approve > span.mat-mdc-focus-indicator').eq(1)
    }

    getYesButtoninLevel1()
    {
        return cy.get('#approveConfirmYes > span.mdc-button__label')
    }

    getTransactionApprovedInLevel1()
    {
        return cy.get('#done > h5') // Transaction Approved 
    }

    getDoneInApproval1()
    {
        return cy.get('#popupDonebtn > span.mdc-button__label')
    }

    getApprovalLevel2ID()
    {
        return cy.get('#P_APPR_L2')
    }

    getApproveButtonforLevel2()
    {
        return cy.get('.approveClass').eq(0)
    }

    getApprovallevel3ID()
    {
        return cy.get('#P_APPR_L3')
    }

}
export default o2cLevel2ApprovalPage