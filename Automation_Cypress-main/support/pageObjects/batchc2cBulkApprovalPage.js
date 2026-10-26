class batchc2cBulkApprovalPage{
    getBulkOperationC2C()
    {
        return cy.get('#toggle-1-button > span')
    }
    getApproveOnec2c()
    {
        return cy.get('#reject')
    }
    getApproversRemarks()
    {
        return cy.get('#textBox')
    }
    getApproveTwoc2c()
    {
        return cy.get('#approve > span.mat-mdc-button-touch-target')
    }
    getYesc2c()
    {
        return cy.get('#approveConfirmYes > span.mat-mdc-button-touch-target')
    }
    getC2CApprovalDone()
    {
        return cy.get('#anotherRecharge > span.mat-mdc-button-touch-target')
    }
    }export default batchc2cBulkApprovalPage